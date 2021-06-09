import { Component, OnInit, Inject, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppConstants } from 'src/app/_helpers/app.constants';
import { ThemeSettingsService } from '../../settings/theme-settings.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NavbarService } from 'src/app/_services/navbar.service';

@Component({
  selector: 'app-full-layout-navbar',
  templateUrl: './full-layout-navbar.component.html',
  styleUrls: ['./full-layout-navbar.component.css']
})
export class FullLayoutNavbarComponent implements OnInit, AfterViewInit {

  isMobile = false;
  showNavbar = false;
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

  func() {
    console.log("Carrito de compras");
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

}
