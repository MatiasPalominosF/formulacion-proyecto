import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

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

  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

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

  constructor() { }

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
  }

  test() {
    this.blockUIProductsInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProductsInfo.stop();
    }, 2500);
  }

  reloadProductsInfo() {
    this.blockUIProductsInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProductsInfo.stop();
    }, 2500);
  }

  reloadSelectProductInfo() {
    this.blockUIProductsSale.start('Loading..');

    setTimeout(() => {
      this.blockUIProductsSale.stop();
    }, 2500);
  }



}
