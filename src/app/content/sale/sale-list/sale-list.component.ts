import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { ProductInterface } from 'src/app/_models/product';
import { Product } from 'src/app/_models/product2';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { NotificationService } from 'src/app/_services/notificacion.service';
import { PaySaleComponent } from '../pay-sale/pay-sale.component';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  @BlockUI('productsInfo') blockUIProductsInfo: NgBlockUI;
  @BlockUI('productsSale') blockUIProductsSale: NgBlockUI;

  public breadcrumb: any;
  public loading = false;
  public submitted = false;
  public currentUser: any;
  public collectionSize: any;
  public pipe: any;
  public productSortable: any;
  public page = 1;
  public pageSize = 4;
  public precioTotal = 0;
  public unidad: string;
  private closeResult = '';

  public productSearch: Observable<ProductInterface[]>;
  public filter = new FormControl('');
  private PRODUCT: ProductInterface[];
  public productList: Array<Product> = [];
  private selectedProduct: Product;
  public productInfo: FormGroup;
  public productInfo2: FormGroup;

  headElements = ['#', 'Producto', 'Precio venta ($)', 'Stock', 'Acciones'];

  elements2: any = [
    { id: 1, first: 'Mark', last: 'Otto' },
    { id: 2, first: 'Jacob', last: 'Thornton' },
    { id: 3, first: 'Larry', last: 'the Bird' },
  ];

  headElements2 = ['Producto', 'Cantidad', 'Precio total ($)', 'Acciones'];

  options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal) {
    this.productInfo = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      total: ['', Validators.required]
    });
    this.productInfo2 = this.formBuilder.group({
      precioTotal: ['']
    });

  }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Gestión de ventas',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Ventas',
          'isLink': false,
          'link': ''
        }
      ]
    };

    console.log("Esto tiene al iniciar: " + this.productList.length);
    this.getUserLogged();
    this.getAllProducts();
    this.emptyListProducts();
  }

  getAllProducts() {
    this.blockUIProductsInfo.start('Loading..');
    this.productService.getFullInfoProduct(this.currentUser.uid).subscribe(product => {
      this.PRODUCT = product;
      this.collectionSize = this.PRODUCT.length;
      this.searchData(this.pipe);
      this.productSortable = this.PRODUCT;
      this.blockUIProductsInfo.stop();
      this.verifyMinimunStock(this.PRODUCT);
    });
  }


  refresh() {
    this.getAllProducts();
  }

  /**
  *
  * '@param' pipe
  */
  searchData(pipe: DecimalPipe) {
    console.log("this.productSearch ", this.productSearch);
    this.productSearch = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  /**
   * Search table
   * '@param' text
   * '@param' pipe
   */
  search(text: string, pipe: PipeTransform) {
    return this.PRODUCT.filter(response => {
      const term = text.toLowerCase();
      return response.name.toLowerCase().includes(term)
        || response.total.toLowerCase().includes(term)
        || response.stock.toLowerCase().includes(term)
    });
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }


  clearForm() {
    this.productInfo.controls['name'].setValue("");
    this.productInfo.controls['quantity'].setValue("");
    this.productInfo.controls['total'].setValue("");

  }

  previewAddProduct(product: ProductInterface) {
    this.clearForm();
    //console.log("PRODUCTO SELECCIONADO:", product);
    this.productInfo.controls['name'].patchValue(product.name);
    this.productInfo.controls['total'].patchValue(product.total);

    this.setMeasure(product);
    this.selectedProduct = product;

  }

  setMeasure(product: ProductInterface) {
    switch (product.measure) {
      case "1":
        this.unidad = "Kg";
        break;
      case "2":
        this.unidad = "Gr";
        break;
      case "3":
        this.unidad = "Lt";
        break;
      case "4":
        this.unidad = "Cc";
        break;
      case "5":
        this.unidad = "Ml";
        break;
      case "6":
        this.unidad = "Un";
        break;

      default:
        break;
    }
  }

  addPreview() {
    console.log("this.selectedProduct", this.selectedProduct);
    if (this.selectedProduct != undefined) {
      this.submitted = true;
      if (this.productInfo.invalid) {
        return;
      }

      if (this.productList.includes(this.selectedProduct)) {
        this.productList.forEach(element => {
          if (element.id === this.selectedProduct.id) {
            var total = parseInt(this.fValue.total);
            var quantity = parseInt(this.fValue.quantity);
            var sum = (total * quantity) + element.totalPrice;
            console.log("suma precio total: ", sum);
            element.totalPrice = sum;
            var tot = quantity + element.quantity;
            console.log("suma cantidad total: ", tot);
            element.quantity = tot;
            this.sumTotal(this.productList[this.productList.length - 1], true, (total * quantity));
          }
        });
      } else {
        this.selectedProduct.quantity = parseInt(this.fValue.quantity);
        this.selectedProduct.cancellation = false;
        var total = parseInt(this.fValue.total);
        var quantity = parseInt(this.fValue.quantity)
        this.selectedProduct.totalPrice = total * quantity;
        this.productList.push(this.selectedProduct);
        this.sumTotal(this.productList[this.productList.length - 1], false, 0);
      }
      this.clearForm();
      this.selectedProduct = undefined;
      this.unidad = "";
      this.submitted = false;
    } else {
      this.notifyService.showWarning("Aviso", "¡Debe seleccionar un producto!");
    }
  }

  sumTotal(product: Product, igual: boolean, total: number) {
    if (igual) {
      this.precioTotal += total;
    } else {
      this.precioTotal += product.totalPrice;
    }
    this.productInfo2.controls['precioTotal'].setValue(this.precioTotal);
  }
  restTotal(product: Product) {
    this.precioTotal -= product.totalPrice;
    this.productInfo2.controls['precioTotal'].setValue(this.precioTotal);
  }

  get f() {
    return this.productInfo.controls;
  }
  get g() {
    return this.productInfo2.controls;
  }

  get fValue() {
    return this.productInfo.value;
  }

  get gValue() {
    return this.productInfo2.value;
  }

  onRemove(value: any) {
    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el producto?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.restTotal(this.productList[value])
          this.productList.splice(value, 1);
          this.notifyService.showSuccess("Eliminar", "¡El producto se eliminó correctamente!");
        }
      }).catch(() => {
        console.log("Not ok");
      });

  }

  reloadProductsInfo() {
    this.refresh();
  }

  onPay() {
    if (this.productList.length == 0 || this.productList.length < 0) {
      this.notifyService.showWarning("Aviso", "¡Debe seleccionar un producto!");
    } else {
      this.productService.productListSelected = this.productList;
      const modalRef = this.modalService.open(PaySaleComponent, { windowClass: 'animated fadeInDown' });
      modalRef.componentInstance.saldoTotal = this.gValue.precioTotal;
      modalRef.result.then((result) => {
        console.log("result:", result);
        if (result) {
          this.emptyListProducts();
          console.log("this.precioTotal", this.precioTotal);
          this.notifyService.showSuccess("Pagar", "¡Se ha realizado el pago correctamente!");
        }
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log(this.closeResult);
      });
    }

  }

  verifyMinimunStock(products: ProductInterface[]) {
    products.forEach(element => {
      var mensaje;
      //console.log(element.stock, " => ", element.minimun, " = ", element.name, "--- stock: ", element.stock, " min: ", element.minimun);
      if (parseInt(element.stock) == parseInt(element.minimun)) {

        mensaje = "Stock mínimo alcanzado en: " + element.name;
        this.notifyService.showInfo("Stock mínimo", mensaje);
      } else if (parseInt(element.stock) < parseInt(element.minimun)) {
        mensaje = "El producto: " + element.name + ", está debajo del stock mínimo";
        this.notifyService.showError("Stock crítico", mensaje);
      }
      mensaje = "";
    });
  }

  emptyListProducts() {
    this.precioTotal = 0;
    this.g['precioTotal'].patchValue(this.precioTotal);
    while (this.productList.length > 0)
      this.productList.pop();
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

  reloadSelectProductInfo() {
    this.blockUIProductsSale.start('Loading..');
    this.emptyListProducts();
    this.blockUIProductsSale.stop();

  }

}
