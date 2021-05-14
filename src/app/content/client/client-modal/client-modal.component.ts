import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/_api/client/client.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css']
})
export class ClientModalComponent implements OnInit {

  @Input() public opc; // 0 its add and 1 its edit
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public clientInfo: FormGroup;
  private currentUser: any;
  public submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.clientInfo = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      rut: ['', Validators.required],
      phone: ['', Validators.required],
      discount: [false, Validators.required],
      percent: ['', Validators.required],
    });

    this.getUserLogged();
  }

  get f() {
    return this.clientInfo.controls;
  }

  get fValue() {
    return this.clientInfo.value;
  }

  onClientInfoSubmit(): void {
    this.submitted = true;

    if (this.clientInfo.invalid) {
      return;
    }

    if (!this.opc) {
      // Se agrega nuevo client.
      if (parseInt(this.fValue.percent, 10) > 0) {
        this.f['discount'].patchValue(true);
      }

      this.clientService.addClient(this.fValue, this.currentUser.uid);
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      // Se edita un cliente.
      /*this.clientService.updateWorker(this.fValue, this.currentUser.uid);
      this.passEntry.emit(false);
      this.activeModal.close(false);*/
    }

    this.clientInfo.reset();

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
