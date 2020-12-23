import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public breadcrumb: any;
  constructor() { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Lista de stock',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Stock',
          'isLink': false,
          'link': ''
        }
      ]
    };
  }

}
