import { NotificationService } from './../../../../_services/notificacion.service';
import { Observable } from 'rxjs';
import { UserInterface } from './../../../../_models/user';
import { DataApiService } from './../../../../_services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/_api/user/user.service';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthService } from 'src/app/_services/auth.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  @BlockUI('numberTabs') blockUINumberTabs: NgBlockUI;
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;

  public currentUser: any;

  // Forms for wizards.
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;



  loading = false;
  uploading = false;
  uploadFile = false;
  uploadOk = false;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  private idUsuario: String;

  private user = {};
  end: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
    private userService: UserService,
    private storage: AngularFireStorage,
    private dataApi: DataApiService,
    private notifyService: NotificationService
  ) {

  }

  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      phone: ['', [Validators.required]],
      birthDate3: ['']
    });

    this.stepTwoForm = this.formBuilder.group({
      cakeName: ['', Validators.required],
      giro: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });

    this.getUserData();
  }

  getUserData(): void {
    this.userService.getCurrentUser(this.currentUser.uid).subscribe(user => {
      console.log("user: ", user);
      this.idUsuario = user[0].id;
      var array = user[0].birthdate.split("/");
      const date: NgbDateStruct = { year: parseInt(array[2]), month: parseInt(array[1]), day: parseInt(array[0]) };
      this.stepOneForm.get("firstName").setValue(user[0].name);
      this.stepOneForm.get("lastName").setValue(user[0].lastName);
      this.stepOneForm.get("email").setValue(this.currentUser.email);
      this.stepOneForm.get("phone").setValue(user[0].phone);
      this.stepOneForm.get("birthDate3").setValue(date);
      this.stepTwoForm.get("cakeName").setValue(user[0].cakeName);
      this.stepTwoForm.get("giro").setValue(user[0].giro);
      this.stepTwoForm.get("address").setValue(user[0].address);
    });
  }

  onSaveUser(): void {
    var birthDate = this.fValue.birthDate3.day + "/" + this.fValue.birthDate3.month + "/" + this.fValue.birthDate3.year;
    this.user = {
      name: this.fValue.firstName,
      lastName: this.fValue.lastName,
      phone: this.fValue.phone,
      birthdate: birthDate,
      cakeName: this.iValue.cakeName,
      giro: this.iValue.giro,
      address: this.iValue.address,
    };
    if (this.userService.updateUser(this.user, this.idUsuario)) {
      this.notifyService.showSuccess("Usuario actualizado correctamente", "Actualización");
      this.router.navigate(['/dashboard/ecommerce']);
    } else {
      this.notifyService.showError("Error al actualizar el usuario", "Actualización");
    }
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
}
