import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() public opc; // 0 its add and 1 its edit
  @BlockUI('productInfo') blockUIProjectInfo: NgBlockUI;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  productInfo: FormGroup;
  submitted = false;
  public ingredientList: FormArray;
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  hobby = ['design', 'development', 'illustration', 'branding', 'video'];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) document
  ) { }


  ngOnInit(): void {
    this.productInfo = this.formBuilder.group({
      name: ['', Validators.required],
      stock: ['', Validators.required],
      neto: ['', Validators.required],
      iva: ['', Validators.required],
      bruto: [''],
      margen: ['', Validators.required],
      total: ['', Validators.required],
      minimun: ['', Validators.required],
      ismaterial: ['', Validators.required],
      measure: ['', Validators.required],
      arrayIngredients: this.formBuilder.array([])
    });
    this.ingredientList = this.productInfo.get('arrayIngredients') as FormArray;
    console.log("opción:", this.opc);
    //this.onchanges();
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
      ingredients: [''],
      quantity: ['']
    });
  }

  onchanges() {
    var precioVenta;
    this.productInfo.get("neto").valueChanges.forEach(neto => {
      var valor = parseInt(neto, 10);
      var iva = (Math.round(valor * 0.19))
      if (!isNaN(valor)) {
        this.productInfo.get("iva").setValue(iva);
      } else {
        this.productInfo.get("iva").setValue(0);
      }
      var bruto = valor + iva;
      if (!isNaN(bruto)) {
        this.productInfo.get("bruto").setValue(bruto);
      } else {
        this.productInfo.get("bruto").setValue(0);
      }


      this.productInfo.get("margen").valueChanges.forEach(margen => {
        margen = (margen / 100) + 1;
        precioVenta = margen * bruto;
        precioVenta = Math.round(precioVenta);
        this.productInfo.get("total").setValue(precioVenta);
      });

      this.productInfo.get("total").valueChanges.forEach(value => {
        var diferencia = precioVenta - bruto;
        //console.log("diferencia: ", diferencia);
        var dif = (diferencia * 100) / precioVenta;
        //console.log("porcentaje venta:", dif);
      })
    });

  }

  modelChanged1(value) {
    var valor = parseInt(value, 10);
    var iva = (Math.round(valor * 0.19))
    if (!isNaN(valor)) {
      this.productInfo.get("iva").setValue(iva);
    } else {
      this.productInfo.get("iva").setValue(0);
    }
    var bruto = valor + iva;
    if (!isNaN(bruto)) {
      this.productInfo.get("bruto").setValue(bruto);
    } else {
      this.productInfo.get("bruto").setValue("");
    }
  }

  modelChanged2(value) {
    console.log(value);
    /*value = parseInt(value, 10);
    value = (value / 100) + 1;

    var total = Math.round(this.productInfo.get("bruto").value * value);

    this.productInfo.get("total").setValue(total);*/
  }

  somethingChanged2(e) {
    if (e != "") {
      console.log(e);
      e = parseInt(e, 10);
      e = (e / 100) + 1;

      var total = Math.round(this.productInfo.get("bruto").value * e);
      this.productInfo.get("total").setValue(total);
    } else {
      this.productInfo.get("total").setValue("");
    }

  }

  somethingChanged(e) {
    if (e != "") {
      var dif = parseInt(e) - this.productInfo.get("bruto").value;
      console.log("dif:", dif);
      dif = (dif * 100) / this.productInfo.get("bruto").value
      dif = Math.ceil(dif);
      this.productInfo.get("margen").setValue(dif);
    } else {
      this.productInfo.get("margen").setValue(0);
    }

  }

  showcontent(value) {
    if (value == "yes") {
      document.getElementById("showaddingredients").style.display = "block";
    } else {
      //this.productInfo.get('arrayIngredients').setErrors(null);
      document.getElementById("showaddingredients").style.display = "none";
    }
  }

  addPhone() {
    this.ingredientList.push(this.createIngredients());
  }

  removePhone(index) {
    this.ingredientList.removeAt(index);
  }

  onProductInfoSubmit() {
    this.submitted = true;

    console.log(this.fValue);
    console.log(this.productInfo.get('arrayIngredients'));

    if (this.productInfo.invalid) {
      return;
    }
    if (this.fValue.ismaterial == "") {
      this.fValue.ismaterial = "no";
    }
    console.log(this.fValue);

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
