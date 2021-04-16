import { Observable } from 'rxjs';
import { ProductInterface } from './../../../_models/product';
import { ProductService } from './../../../_api/product/product.service';
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
  ingredientes: ProductInterface[];
  measures = [
    { name: "Kilogramos", id: 1 },
    { name: "Gramos", id: 2 },
    { name: "Litros", id: 3 },
    { name: "Centimetros cúbicos", id: 4 },
    { name: "Mililitros", id: 5 },
    { name: "Unidad", id: 6 }
  ]
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  hobby = ['design', 'development', 'illustration', 'branding', 'video'];
  private currentUser: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public productService: ProductService,
    @Inject(DOCUMENT) document
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
      ingredients: this.formBuilder.array([])
    });

    this.getUserLogged();
    this.ingredientList = this.productInfo.get('ingredients') as FormArray;
    console.log("opción:", this.opc);
    this.getIngredients();
    this.prueba();
  }
  get userFormGroup() {
    return this.productInfo.get('ingredients') as FormArray;
  }

  get f() {
    return this.productInfo.controls;
  }

  get fValue() {
    return this.productInfo.value;
  }

  getIngredients() {
    this.productService.getMaterial(this.currentUser.uid).subscribe(datos => {
      console.log("Ahora viene esto:", datos);
      this.ingredientes = datos;
    });
  }

  prueba() {
    this.productService.getProductById(this.currentUser.uid, this.productService.selectedProduct.id).subscribe(
      datos => {
        console.log("PRODUTO DATOS: ", datos);
      }
    );

  }
  createIngredients(): FormGroup {
    return this.formBuilder.group({
      idIngredients: [''],
      quantity: ['']
    });
  }

  setIvaBruto(value) {
    var valor = parseInt(value, 10);
    var iva = (Math.round(valor * 0.19))
    if (!isNaN(valor)) {
      this.productInfo.get("iva").setValue("" + iva);
    } else {
      this.productInfo.get("iva").setValue("");
    }
    var bruto = valor + iva;
    if (!isNaN(bruto)) {
      this.productInfo.get("bruto").setValue("" + bruto);
    } else {
      this.productInfo.get("bruto").setValue("");
    }
  }

  setTotal(e) {
    if (e != "") {
      console.log(e);
      e = parseInt(e, 10);
      e = (e / 100) + 1;

      var total = Math.round(this.productInfo.get("bruto").value * e);
      this.productInfo.get("total").setValue("" + total);
    } else {
      this.productInfo.get("total").setValue("");
    }

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  setMargen(e) {
    if (e != "") {
      var dif = parseInt(e) - this.productInfo.get("bruto").value;
      dif = (dif * 100) / this.productInfo.get("bruto").value
      dif = Math.ceil(dif);
      this.productInfo.get("margen").setValue("" + dif);
    } else {
      this.productInfo.get("margen").setValue(0);
    }

  }

  showcontent(value) {
    if (value == "yes") {
      document.getElementById("showaddingredients").style.display = "block";
    } else {
      //this.productInfo.get('ingredients').setErrors(null);
      document.getElementById("showaddingredients").style.display = "none";
    }
  }

  addPhone() {
    this.ingredientList.push(this.createIngredients());
  }

  removePhone(index) {
    this.ingredientList.removeAt(index);
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  onProductInfoSubmit() {
    this.submitted = true;


    console.log(this.fValue);
    console.log(this.productInfo.get('ingredients'));

    if (this.productInfo.invalid) {
      return;
    }
    if (this.fValue.ismaterial == "" || this.fValue.ismaterial == "no") {
      this.fValue.ismaterial = false;
    } else {
      this.fValue.ismaterial = true;
    }
    console.log("Value aceptado:", this.fValue);

    if (!this.opc) {

      this.fValue.ingredients.forEach(element => {
        element.quantity = element.quantity * this.fValue.stock;
      });

      // Se agrega nuevo usuario.
      this.productService.addProduct(this.fValue, this.currentUser.uid);
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      // Se edita un usuario.
      this.productService.updateProduct(this.fValue, this.productService.selectedProduct.id, this.currentUser.uid);
      this.passEntry.emit(false);
      this.activeModal.close(false);
    }
    this.productInfo.reset();
  }



}
