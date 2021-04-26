import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { ProductInterface } from 'src/app/_models/product';

export interface Product {
  id?: string;
  name?: string;
  total?: string;
  stock?: string;
  quantity?: number;
  totalPrice?: number;
  measure?: string;
  ingredients?: [];
}


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
  public currentUser: any;
  public collectionSize: any;
  public pipe: any;
  public productSortable: any;
  public page = 1;
  public pageSize = 4;
  public precioTotal = 0;

  public productSearch: Observable<ProductInterface[]>;
  public filter = new FormControl('');
  private PRODUCT: ProductInterface[];
  public productList: Array<Product> = [];
  private selectedProduct: Product;
  public productInfo: FormGroup;

  headElements = ['#', 'Producto', 'Precio venta ($)', 'Stock', 'Acciones'];

  elements2: any = [
    { id: 1, first: 'Mark', last: 'Otto' },
    { id: 2, first: 'Jacob', last: 'Thornton' },
    { id: 3, first: 'Larry', last: 'the Bird' },
  ];

  headElements2 = ['Producto', 'Cantidad', 'Precio', 'Acciones'];

  options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,) {

    this.productInfo = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      total: ['', Validators.required]
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

    this.getUserLogged();
    this.getAllProducts();
  }

  getAllProducts() {
    this.blockUIProductsInfo.start('Loading..');
    this.productService.getFullInfoProduct(this.currentUser.uid).subscribe(product => {
      this.PRODUCT = product;
      this.collectionSize = this.PRODUCT.length;
      this.searchData(this.pipe);
      this.productSortable = this.PRODUCT;
      this.blockUIProductsInfo.stop();
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
    this.selectedProduct = product;

  }

  addPreview() {
    console.log("ya", this.fValue);
    console.log("ya22", this.selectedProduct);
    this.selectedProduct.quantity = parseInt(this.fValue.quantity);
    var total = parseInt(this.fValue.total);
    var quantity = parseInt(this.fValue.quantity)
    this.selectedProduct.totalPrice = total * quantity;

    console.log("this.selectedProduct.totalPrice", this.selectedProduct.totalPrice);
    this.productList.push(this.selectedProduct);
    this.clearForm();

  }

  get fValue() {
    return this.productInfo.value;
  }

  onRemove(value: any) {
    console.log("posición a borrar");
    this.productList.splice(value, 1);
  }

  reloadProductsInfo() {
    this.refresh();
  }

  reloadSelectProductInfo() {
    this.blockUIProductsSale.start('Loading..');

    setTimeout(() => {
      this.blockUIProductsSale.stop();
    }, 2500);
  }



}
