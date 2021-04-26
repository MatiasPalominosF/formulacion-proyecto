import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { ProductInterface } from 'src/app/_models/product';
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

  public productSearch: Observable<ProductInterface[]>;
  public filter = new FormControl('');
  private PRODUCT: ProductInterface[];

  headElements = ['#', 'Producto', 'Precio venta ($)', 'Stock', 'Acciones'];

  elements2: any = [
    { id: 1, first: 'Mark', last: 'Otto' },
    { id: 2, first: 'Jacob', last: 'Thornton' },
    { id: 3, first: 'Larry', last: 'the Bird' },
  ];

  headElements2 = ['Producto', 'Cantidad', 'Acciones'];

  options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };

  constructor(private productService: ProductService) { }

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

  test() {
    this.blockUIProductsInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProductsInfo.stop();
    }, 2500);
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
