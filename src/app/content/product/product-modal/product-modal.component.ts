import { Observable } from 'rxjs';
import { ProductInterface } from './../../../_models/product';
import { ProductService } from './../../../_api/product/product.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NotificationService } from 'src/app/_services/notificacion.service';
import { ProductIngredientComponent } from '../product-ingredient/product-ingredient.component';

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
  closeResult = '';
  submitted = false;
  public titleIngredient = '';
  public ingredientList: FormArray;
  ingredientes: ProductInterface[];
  measureName;
  measures = [
    { name: "Kilogramos", id: 1 },
    { name: "Gramos", id: 2 },
    { name: "Litros", id: 3 },
    { name: "Centimetros cúbicos", id: 4 },
    { name: "Mililitros", id: 5 },
    { name: "Unidad", id: 6 }
  ]
  options = [
    { id: "yes", value: true },
    { id: "no", value: false }
  ]
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  hobby = ['design', 'development', 'illustration', 'branding', 'video'];
  private currentUser: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public productService: ProductService,
    private modalService: NgbModal,
    private notifyService: NotificationService,
    @Inject(DOCUMENT) document
  ) { }


  ngOnInit(): void {
    this.productInfo = this.formBuilder.group({
      haveIngredient: false,
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
    if (!this.opc) {
      this.titleIngredient = "Agregar ingredientes";
    }

    this.getIngredients();
    this.setData();
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

  setData() {
    if (this.opc) {
      if (this.productService.selectedProduct.ingredients.length > 0) {
        this.titleIngredient = "Editar ingredientes";
      } else {
        this.titleIngredient = "Agregar ingredientes";
      }
      this.f['name'].patchValue(this.productService.selectedProduct.name);
      this.f['measure'].patchValue(this.productService.selectedProduct.measure);
      this.f['neto'].patchValue(this.productService.selectedProduct.neto);
      this.f['iva'].patchValue(this.productService.selectedProduct.iva);
      this.f['bruto'].patchValue(this.productService.selectedProduct.bruto);
      this.f['margen'].patchValue(this.productService.selectedProduct.margen);
      this.f['total'].patchValue(this.productService.selectedProduct.total);
      this.f['stock'].patchValue(this.productService.selectedProduct.stock);
      this.f['minimun'].patchValue(this.productService.selectedProduct.minimun);
      if (this.productService.selectedProduct.ismaterial) {
        this.f['ismaterial'].patchValue("yes");
      } else {
        this.f['ismaterial'].patchValue("no");
      }

    }
  }

  setMeaure(opc: any) {

    if (opc == 1) {

    } else {
      console.log("this.productService.selectedProduct.measure", this.productService.selectedProduct.measure);
      switch (this.productService.selectedProduct.measure) {
        case "1":
          this.measureName = "Kg"
          break;
        case "2":
          this.measureName = "Gr"
          break;
        case "3":
          this.measureName = "L"
          break;
        case "4":
          this.measureName = "Cc"
          break;
        case "5":
          this.measureName = "Ml"
          break;
        case "6":
          this.measureName = "Un"
          break;
        default:
          console.log("Error!");
      }
    }

  }


  addIngredients() {
    console.log("Se presionó", this.productService.selectedProduct.ingredients);
    var opc: boolean;
    if (this.titleIngredient == "Agregar ingredientes") {
      opc = false;
    } if (this.titleIngredient == "Editar ingredientes") {
      opc = true;
    }
    const modalRef = this.modalService.open(ProductIngredientComponent, { windowClass: 'animated fadeInDown', size: 'lg' });
    modalRef.componentInstance.opc = opc;
    modalRef.result.then((result) => {
      if (result) {
        this.notifyService.showSuccess("Agregar", "¡Los ingredientes se agregaron correctamente!");
      }
      if (!result) {
        this.notifyService.showSuccess("Editar", "¡Los ingredientes se editaron correctamente!");
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setValueInIngredients() {
    var any;
    if (this.productService.selectedProduct.ingredients != undefined && this.productService.selectedProduct.ingredients.length > 0 && this.productService.selectedProduct.ingredients != null) {
      document.getElementById("showaddingredients").style.display = "block";
      this.productService.selectedProduct.ingredients.forEach(element => {
        any = element;
        console.log("any.idIngredients", any.idIngredients);
        console.log("any.quantity", any.quantity);
        console.log("any.measure", any.measure2);
        this.ingredientList.push(this.formBuilder.group({
          idIngredients: any.idIngredients,
          quantity: any.quantity,
          measure2: any.measure2,
        }))

      });
    }

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

  onChangeObj(value: any) {
    console.log("que:", value);
    this.productService.getProductById(this.currentUser.uid, value).subscribe(producto => {
      var arrayControl = this.userFormGroup;


      switch (producto.measure) {
        case "1":
          this.measureName = "Kg"
          break;
        case "2":
          this.measureName = "Gr"
          break;
        case "3":
          this.measureName = "L"
          break;
        case "4":
          this.measureName = "Cc"
          break;
        case "5":
          this.measureName = "Ml"
          break;
        case "6":
          this.measureName = "Un"
          break;
        default:
          console.log("Sin datos!");
      }


      console.log("aaa", arrayControl.value)
    });
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

  createIngredients(): FormGroup {
    return this.formBuilder.group({
      idIngredients: [''],
      quantity: [''],
      measure2: [''],
    });
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
      console.log("SE PRESIONA EDITAR...");
      this.productService.updateProduct(this.fValue, this.productService.selectedProduct.id, this.currentUser.uid);
      this.passEntry.emit(false);
      this.activeModal.close(false);
    }
    this.productInfo.reset();
  }



}
