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
  private product: ProductInterface = {};
  closeResult = '';
  submitted = false;
  public titleIngredient = '';
  public opcIngredient;
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
      stock: ['', [Validators.required, Validators.min(0)]],
      neto: ['', [Validators.required, Validators.min(1)]],
      iva: ['', [Validators.required]],
      bruto: ['', [Validators.required]],
      margen: ['', [Validators.required, Validators.min(0)]],
      total: ['', [Validators.required, Validators.min(1)]],
      minimun: ['', [Validators.required, Validators.min(0)]],
      ismaterial: ['', Validators.required],
      measure: ['', Validators.required],
    });

    //Validators.pattern(/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/)
    this.getUserLogged();
    if (!this.opc) {
      this.titleIngredient = "Agregar ingredientes";
    }

    this.getIngredients();
    this.setData();

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

  addDotInNumber(id: string) {
    let field = this.productInfo.get(id);
    var entrada = field.value.split('.').join('');
    entrada = entrada.split('').reverse();
    var salida = [];
    var aux = '';
    var paginador = Math.ceil(entrada.length / 3);

    for (let i = 0; i < paginador; i++) {
      for (let j = 0; j < 3; j++) {
        if (entrada[j + (i * 3)] != undefined) {
          aux += entrada[j + (i * 3)];
        }
      }

      salida.push(aux);
      aux = '';
      var final = salida.join('.').split("").reverse().join('');
      field.setValue(final);
    }
  }

  deleteDotInNumber(field: string) {
    var entrada = field.split('.').join('');
    return entrada;
  }

  addIngredients() {
    if (this.titleIngredient == "Agregar ingredientes") {
      this.opcIngredient = false;
    } if (this.titleIngredient == "Editar ingredientes") {
      this.opcIngredient = true;
    }
    const modalRef = this.modalService.open(ProductIngredientComponent, { windowClass: 'animated fadeInDown', size: 'lg' });
    modalRef.componentInstance.opc = this.opcIngredient;
    modalRef.result.then((result) => {
      if (result) {
        this.notifyService.showSuccess("Editar", "¡Los ingredientes se editaron correctamente!");
      }
      else {
        this.notifyService.showSuccess("Agregar", "¡Los ingredientes se agregaron correctamente!");
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

  getIngredients() {
    this.productService.getMaterial(this.currentUser.uid).subscribe(datos => {
      this.ingredientes = datos;
    });
  }

  setIvaBruto(value) {
    value = this.deleteDotInNumber(value);
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

    if (!this.opc) {
      this.product = this.fValue;
      this.product.ingredients = this.productService.ingredientsSelected;
      // Se agrega nuevo producto.
      this.productService.addProduct(this.product, this.currentUser.uid);
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      this.product = this.fValue;
      this.product.id = this.productService.selectedProduct.id;
      if (this.opcIngredient) {
        if (this.productService.ingredientsSelected.length == 0) {
          this.product.ingredients = this.productService.selectedProduct.ingredients;
        } else {
          this.product.ingredients = this.productService.ingredientsSelected;
        }
      }
      //Se edita un producto.
      this.productService.updateProduct(this.product, this.product.id, this.currentUser.uid);
      this.passEntry.emit(false);
      this.activeModal.close(false);
    }
    this.productService.ingredientsSelected = [];
    this.productInfo.reset();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.productInfo.get(controlName).hasError(errorName);
  };
}
