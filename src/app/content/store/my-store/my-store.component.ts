import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/_services/notificacion.service';

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
  private url: string;
  constructor(
    private router: Router,
    private notifyService: NotificationService,
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
    this.getCurrentRoute();
  }


  getCurrentRoute(): void {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    this.url = baseUrl + "/mi-tienda/" + this.uid;
    console.log("this.url", this.url);
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  setUid(): void {
    this.uid = this.currentUser.uid;
  }

  copyRoute(): void {
    this.getCurrentRoute();
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.notifyService.showInfo("Copiar", "¡El link de su tienda ha sido copiado correctamente!");
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
