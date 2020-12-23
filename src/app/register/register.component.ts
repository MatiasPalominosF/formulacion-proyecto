import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_api/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @BlockUI('numberTabs') blockUINumberTabs: NgBlockUI;
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;
  @ViewChild('labelImport', { static: true }) labelImport: ElementRef;
  @ViewChild('logoCake') logoCake: ElementRef;
  registerForm: FormGroup;

  // Forms for wizards.
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;

  // Attribute for File
  fileToUpload: File = null;
  uploadPercent: Observable<number>;
  urlImage: Observable<String>;

  isStepTwoReached = false;
  isStepOneReached = false;


  loading = false;
  uploading = false;
  uploadFile = false;
  uploadOk = false;
  submitted = false;
  errorMessage = '';
  successMessage = '';
  user = {};
  users = [];
  defaultImage = '../assets/images/portrait/small/default.png';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
    private userService: UserService,
    private storage: AngularFireStorage) {
  }

  ngOnInit() {

    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      birthDate3: ['']
    });

    this.stepTwoForm = this.formBuilder.group({
      cakeName: ['', Validators.required],
      giro: ['', [Validators.required]],
      address: ['', [Validators.required]],
      logo: ['', [Validators.required]],
    });



    this.userService.getUsers().subscribe(users => {
      this.users = users.map(item => {
        return {
          ...item.payload.doc.data() as {},
          id: item.payload.doc.id
        };
      });
    });
  }

  get f() {
    return this.stepOneForm.controls;
  }
  get i() {
    return this.stepTwoForm.controls;
  }

  get fValue() {
    return this.stepOneForm.value;
  }
  get iValue() {
    return this.stepTwoForm.value;
  }

  submit() {
    console.log("se presionó");
    this.submitted = true;
    console.log("upload en submit ", this.fileToUpload);
    if (this.stepTwoForm.invalid) {
      console.log("Pasó pa acá");
      this.submitted = false;
      return;
    }
    this.loading = true;
    this.authService.doRegister(this.stepOneForm.value).then(
      res => {
        var birthDate = this.fValue.birthDate3.day + "/" + this.fValue.birthDate3.month + "/" + this.fValue.birthDate3.year;
        this.user = {
          name: this.fValue.firstName,
          lastName: this.fValue.lastName,
          image: '../../../../assets/images/portrait/small/default.png',
          phone: this.fValue.phone,
          birthdate: birthDate,
          cakeName: this.iValue.cakeName,
          address: this.iValue.address,
          rol: "admin",
          giro: this.iValue.giro,
          uid: res.user.uid
        };
        console.log("El usuario " + this.user);
        const currentUser = firebase.auth().currentUser;
        currentUser.updateProfile({
          photoURL: this.logoCake.nativeElement.value,
          displayName: this.fValue.firstName + " " + this.fValue.lastName
        }).then(user => {
          console.log(user, 'user succesfull update');
        }, err => {
          console.log(err);
        });

        this.loading = false;
        console.log(res);
        this.errorMessage = '';
        this.alertService.success('Registration successful', true);
        if (this.users.length === 0) {
          this.userService.createUser(this.user).then(user => {
            console.log(user);
          });
        } else if (this.users.length !== 0) {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].uid !== res.user.uid) {
              this.userService.createUser(this.user).then(user => {
                console.log(user);
              });
              break;
            } else {
              console.log('error');
            }
          }
        } else {
          console.log('error');
        }
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.submitted = false;
        this.alertService.error(err.message);
      }
    );
  }

  onFileChange(files: FileList) {
    console.log(files);
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
    console.log("al", this.fileToUpload);

    const id = Math.random().toString(36).substring(2); // Id for images
    const file = this.fileToUpload;
    const filePath = `uploads/image_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    console.log(this.uploadPercent);
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe((value) => {
      this.uploading = true;
    });

    this.uploadOk = true;
  }
}
