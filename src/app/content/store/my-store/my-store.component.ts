import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent implements OnInit {
  public product = { uid: "", image: "" };
  public breadcrumb: any;
  public currentUser: any;
  public uid: any;
  constructor(
    private router: Router
  ) { }

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
    this.getUserLogged();
    this.setUid();
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log("curren:", this.currentUser);
    }
  }

  setUid(): void {
    this.uid = this.currentUser.uid;
  }

  showMyStore(): void {
    this.product.uid = this.currentUser.uid;
    this.product.image = this.currentUser.photoURL;
    /*this.router.navigate(["view-store/my-store-view"], {
      queryParams: {
        uid: this.product.uid,
        image: this.product.uid,
      }, skipLocationChange: true
    })*/
    this.router.navigate(['/mi-tienda', this.uid]);
  }

}
