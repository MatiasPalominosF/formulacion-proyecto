import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent implements OnInit {

  public breadcrumb: any;
  constructor() { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Configuración',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/ecommerce'
        },
        {
          'name': 'Vitrina comercial',
          'isLink': false,
          'link': ''
        }
      ]
    };
  }

}
