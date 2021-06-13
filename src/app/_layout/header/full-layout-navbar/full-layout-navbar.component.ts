import { Component, OnInit, Inject, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppConstants } from 'src/app/_helpers/app.constants';
import { ThemeSettingsService } from '../../settings/theme-settings.service';
import { multicast, switchMap, takeUntil } from 'rxjs/operators';
import { ConnectableObservable, interval, Observable, of, Subject } from 'rxjs';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NavbarService } from 'src/app/_services/navbar.service';
import { ProductCart } from 'src/app/_models/productCart';
import { NotificationService } from 'src/app/_services/notificacion.service';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { PayCartModalComponent } from 'src/app/content/view-store/pay-cart-modal/pay-cart-modal.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-layout-navbar',
  templateUrl: './full-layout-navbar.component.html',
  styleUrls: ['./full-layout-navbar.component.css']
})
export class FullLayoutNavbarComponent implements OnInit, AfterViewInit {

  isMobile = false;
  private closeResult = '';
  showNavbar = false;
  public cargar = true;
  public totalProduct = 0;
  private phoneCakeShop: number;
  public totalPriceProducts = 0;
  public productCartList: Array<ProductCart> = [];
  public selectedHeaderNavBarClass: string;
  public selectedNavBarHeaderClass: string;
  public notification: any;
  public _themeSettingsConfig: any;
  private _unsubscribeAll: Subject<any>;
  private _unsubscribeAllMenu: Subject<any>;
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: false };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _themeSettingsService: ThemeSettingsService,
    private _renderer: Renderer2,
    private navbarService: NavbarService,
    private notifyService: NotificationService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal
  ) {
    this._unsubscribeAll = new Subject();
    this._unsubscribeAllMenu = new Subject();
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH;
    if (!this.isMobile) {
      this.showNavbar = true;
    }

    // Subscribe to config changes
    this._themeSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        console.log("config", config);
        this._themeSettingsConfig = config;
        this.refreshView();
      });
    this.notification = this._themeSettingsConfig.headerIcons.notification;

    setInterval(() => this.getDataCart(), 300);

  }

  refreshView() {
    const navigationElement = document.getElementsByClassName('main-menu');
    const navbarElement = document.getElementsByClassName('header-navbar');
    const themeColorElement = document.getElementsByClassName('header-navbar');

    if (this._themeSettingsConfig.colorTheme === 'semi-light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
      this.selectedHeaderNavBarClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'dark') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
    }


    if (themeColorElement) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
      }
    }

    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'navbar-static-top') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
        this._renderer.addClass(navigationElement.item(0), 'menu-static');
      }
    }

    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'semi-light') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-semi-light bg-gradient-x-grey-blue');
      } else if (this._themeSettingsConfig.menu === 'semi-dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
      } else if (this._themeSettingsConfig.menu === 'dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
      } else if (this._themeSettingsConfig.menu === 'light') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-light');
      }
    }
  }

  ngAfterViewInit(): void {
    this.refreshView();
  }

  delete(element: ProductCart) {

    console.log("borrar del carrito", element);

    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el producto?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.productCartList.find((el, index) => {
            console.log("el", el);
            if (el != undefined) {
              if (el.id === element.id) {
                console.log("index", index);
                console.log("el", element);
                this.productCartList.splice(index, 1);
                this.totalProduct -= this.stringToInt(element.quantity);
                this.totalPriceProducts -= this.stringToInt(element.totalPrice);
                localStorage.setItem('dataProductCart', JSON.stringify(this.productCartList));
                localStorage.setItem('totalProductCart', JSON.stringify(this.totalProduct));
                localStorage.setItem('totalPriceProducts', JSON.stringify(this.totalPriceProducts));
                this.notifyService.showSuccess("Eliminar", "¡El producto se eliminó correctamente!");
              }
            }
          });
        }
      }).catch(() => {
        console.log("Not ok");
      });
  }

  goPayCart() {
    console.log("Carrito de compras");

    const modalRef = this.modalService.open(PayCartModalComponent, { windowClass: 'animated bounce', backdrop: 'static', size: 'lg' });
    modalRef.componentInstance.dataProductCart = this.productCartList;
    modalRef.componentInstance.totalPriceProducts = this.totalPriceProducts;
    var phoneCakeShopFlag = this.intToString(this.phoneCakeShop);
    modalRef.componentInstance.phoneCakeShop = phoneCakeShopFlag;
    modalRef.result.then((result) => {
      console.log("result:", result);
      if (result) {
        localStorage.removeItem('dataProductCart');
        localStorage.removeItem('totalProductCart');
        localStorage.removeItem('totalPriceProducts');
        this.notifyService.showSuccess("Pagar", "¡Se ha realizado el pago correctamente!");

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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.isMobile = true;
      this.showNavbar = false;
    } else {
      this.isMobile = false;
      this.showNavbar = true;
    }
  }

  toggleNavbar(e) {
    console.log("toggleNavbar", e);
    if (this.showNavbar) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }

  getDataCart() {
    if (localStorage.getItem('dataProductCart')) {
      this.productCartList = JSON.parse(localStorage.getItem('dataProductCart'));
    } else {
      this.productCartList = [];
    }

    this.getTotalProduct();
    this.getTotalPriceProducts();
    this.getPhoneCakeShop();

  }

  getTotalProduct() {
    if (localStorage.getItem('totalProductCart')) {
      this.totalProduct = JSON.parse(localStorage.getItem('totalProductCart'));
    } else {
      this.totalProduct = 0;
    }
  }

  getTotalPriceProducts() {
    if (localStorage.getItem('totalPriceProducts')) {
      this.totalPriceProducts = JSON.parse(localStorage.getItem('totalPriceProducts'));
    } else {
      this.totalPriceProducts = 0;
    }
  }

  getPhoneCakeShop() {
    if (localStorage.getItem('phoneCakeShop')) {
      this.phoneCakeShop = JSON.parse(localStorage.getItem('phoneCakeShop'));
    } else {
      this.phoneCakeShop = 0;
    }
  }

  stringToInt(value: string): number {
    var res = parseInt(value, 10);

    return res;
  }

  intToString(value: number): string {
    var res = value + "";

    return res;
  }

}
