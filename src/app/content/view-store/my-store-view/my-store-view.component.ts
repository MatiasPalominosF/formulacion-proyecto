import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { filter } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { UserService } from 'src/app/_api/user/user.service';
import { ProductInterface } from 'src/app/_models/product';

@Component({
  selector: 'app-my-store-view',
  templateUrl: './my-store-view.component.html',
  styleUrls: ['./my-store-view.component.css']
})
export class MyStoreViewComponent implements OnInit {

  @BlockUI('allInfo') blockUIAllInfo: NgBlockUI;
  public product: any;
  public uid: any;
  public carouselTwo = [
    '../../../assets/images/carousel/08.jpg',
    '../../../assets/images/carousel/03.jpg',
    '../../../assets/images/carousel/01.jpg'
  ];
  public PRODUCT: ProductInterface[];
  public collectionSize: any;
  public page = 1;
  public pageSize = 4;
  public nameCake;
  public addressCake;

  constructor(
    private router: ActivatedRoute,
    private config: NgbCarouselConfig,
    private productService: ProductService,
    private userService: UserService
  ) {
    config.interval = 3000;
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.uid = this.router.snapshot.paramMap.get('uid');
    console.log("this.router.snapshot.paramMap", this.router.snapshot.paramMap);
    this.getFullInfoProduct();
    this.getInfoUser();
  }

  getFullInfoProduct() {
    this.blockUIAllInfo.start('Cargando..');
    this.productService.getFullInfoProduct(this.uid).subscribe(product => {
      this.PRODUCT = product;
      this.collectionSize = this.PRODUCT.length;
      this.blockUIAllInfo.stop();
    });
  }

  getInfoUser() {
    this.userService.getOneUser(this.uid).subscribe(
      data => {
        console.log(data);
        this.nameCake = data.cakeName;
        this.addressCake = data.address;
      }
    );
  }

}
