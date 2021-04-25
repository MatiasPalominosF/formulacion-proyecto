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

  options = {
    close: true,
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
