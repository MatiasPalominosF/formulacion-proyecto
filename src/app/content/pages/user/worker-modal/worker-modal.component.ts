import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  submitted = false;
  projectInfo: FormGroup;
  private currentUser: any;
  constructor(
    public activeModal: NgbActiveModal,
    public workerService: WorkersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.opc);
    this.projectInfo = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      id: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.getUserLogged();
  }

  get f() {
    return this.projectInfo.controls;
  }

  get fValue() {
    return this.projectInfo.value;
  }

  onProjectInfoSubmit() {
    this.submitted = true;

    if (this.projectInfo.invalid) {
      return;
    }

    if (!this.opc) {
      // Se agrega nuevo usuario.
      this.workerService.addWorker(this.fValue, this.currentUser.uid);
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      // Se edita un usuario.
      this.workerService.updateWorker(this.fValue, this.currentUser.uid);
      this.passEntry.emit(false);
      this.activeModal.close(false);
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
}
