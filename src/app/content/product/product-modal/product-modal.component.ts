import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  productInfo: FormGroup;
  submitted = false;
  public ingredientList: FormArray;
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  hobby = ['design', 'development', 'illustration', 'branding', 'video'];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.productInfo = this.formBuilder.group({
      name: ['', Validators.required],
      stock: ['', Validators.required],
      neto: ['', Validators.required],
      iva: ['', Validators.required],
      bruto: ['', Validators.required],
      margen: ['', Validators.required],
      total: ['', Validators.required],
      minimun: ['', Validators.required],
      ismaterial: ['', Validators.required],
      measure: ['', Validators.required],
      arrayIngredients: this.formBuilder.array([this.createIngredients()]),
    });
    this.ingredientList = this.productInfo.get('arrayIngredients') as FormArray;
  }
  get userFormGroup() {
    return this.productInfo.get('arrayIngredients') as FormArray;
  }

  get f() {
    return this.productInfo.controls;
  }

  get fValue() {
    return this.productInfo.value;
  }

  createIngredients(): FormGroup {
    return this.formBuilder.group({
      ingredients: ['', Validators.required]
    });
  }

  addPhone() {
    this.ingredientList.push(this.createIngredients());
  }

  removePhone(index) {
    this.ingredientList.removeAt(index);
  }

  onProjectInfoSubmit() {
    this.submitted = true;

    if (this.productInfo.invalid) {
      return;
    }

    /*if (!this.opc) {
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

    this.projectInfo.reset();*/

  }

}
