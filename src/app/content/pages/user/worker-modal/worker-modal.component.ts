import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { WorkersService } from './../../../../_api/workers/workers.service';
import { WorkersInterface } from './../../../../_models/workers';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-worker-modal',
  templateUrl: './worker-modal.component.html',
  styleUrls: ['./worker-modal.component.css']
})
export class WorkerModalComponent implements OnInit {
  @Input() public opc; // 0 its add and 1 its edit
  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public roles = [
    { name: "Vendedor", id: 1 },
    { name: "Pastelero", id: 2 },
    { name: "Contador", id: 3 },
  ]


  submitted = false;
  projectInfo: FormGroup;
  private currentUser: any;
  constructor(
    public activeModal: NgbActiveModal,
    public workerService: WorkersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.projectInfo = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      id: ['', [Validators.required, Validators.pattern(/^\d{1,2}\d{3}\d{3}[-][0-9kK]{1}$/), this.checkVerificatorDigit]],
      uidboss: [''],
      password: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      rol: ['', Validators.required],
    });

    this.getUserLogged();

    if (this.opc) {
      this.setValueInForm();
    }
  }

  get f() {
    return this.projectInfo.controls;
  }

  get fValue() {
    return this.projectInfo.value;
  }

  setValueInForm() {
    this.f['name'].patchValue(this.workerService.selectedWorker.name);
    this.f['lastname'].patchValue(this.workerService.selectedWorker.lastname);
    this.f['id'].patchValue(this.workerService.selectedWorker.id);
    this.f['password'].patchValue(this.workerService.selectedWorker.password);
    this.f['phone'].patchValue(this.workerService.selectedWorker.phone);
    this.f['rol'].patchValue(this.workerService.selectedWorker.rol);
  }

  onProjectInfoSubmit() {
    this.submitted = true;

    if (this.projectInfo.invalid) {
      return;
    }

    console.log("Acá");
    if (!this.opc) {
      console.log("this.fValue", this.fValue);
      // Se agrega nuevo usuario.
      this.f['uidboss'].patchValue(this.currentUser.uid);
      this.workerService.addWorker(this.fValue, this.currentUser.uid);
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      // Se edita un usuario.
      this.f['uidboss'].patchValue(this.currentUser.uid);
      console.log("this.workerService.updateWorker(this.fValue, this.currentUser.uid)", this.workerService.updateWorker(this.fValue, this.currentUser.uid));
      if (this.workerService.updateWorker(this.fValue, this.currentUser.uid)) {
        this.passEntry.emit(false);
        this.activeModal.close(false);
      }
    }

    this.projectInfo.reset();

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

  checkRun() {
    console.log(this.projectInfo.get("id").value);
    let run = this.projectInfo.get("id");
    //Despejar Puntos
    var runClean = run.value.replace('.', '');
    // Despejar Guión
    runClean = runClean.replace('-', '');

    // Aislar Cuerpo y Dígito Verificador
    let body = runClean.slice(0, -1);
    let dv = runClean.slice(-1).toUpperCase();

    // Formatear RUN
    run.setValue(body + '-' + dv);
  }

  checkVerificatorDigit(control: AbstractControl) {
    let run = control;
    if (run.value == null) return;
    //Despejar Puntos
    var runClean = run.value.replace('.', '');
    // Despejar Guión
    runClean = runClean.replace('-', '');

    // Aislar Cuerpo y Dígito Verificador
    let body = runClean.slice(0, -1);
    let dv = runClean.slice(-1).toUpperCase();

    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for (let i = 1; i <= body.length; i++) {

      // Obtener su Producto con el Múltiplo Correspondiente
      let index = multiplo * runClean.charAt(body.length - i);

      // Sumar al Contador General
      suma = suma + index;

      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
      return { verificator: true };
    }
    else null;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.projectInfo.get(controlName).hasError(errorName);
  };
}
