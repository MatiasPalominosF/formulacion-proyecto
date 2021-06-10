import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { filter } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { UserService } from 'src/app/_api/user/user.service';
import { ProductInterface } from 'src/app/_models/product';
import { ProductCart } from 'src/app/_models/productCart';

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
  public productInfo: FormGroup;
  public productCartList: Array<ProductCart> = [];
  private productCart: ProductCart = {};
  public collectionSize: any;
  public page = 1;
  public pageSize = 4;
  public nameCake;
  public addressCake;
  private totalProduct = 0;

  constructor(
    private router: ActivatedRoute,
    private config: NgbCarouselConfig,
    private productService: ProductService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    config.interval = 3000;
    config.keyboard = false;
    this.productInfo = this.formBuilder.group({
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.uid = this.router.snapshot.paramMap.get('uid');
    console.log("this.router.snapshot.paramMap", this.router.snapshot.paramMap);
    this.getFullInfoProduct();
    this.getInfoUser();
  }

  get f() {
    return this.productInfo.controls;
  }

  get fValue() {
    return this.productInfo.value;
  }

  getFullInfoProduct() {
    this.blockUIAllInfo.start('Cargando..');
    this.productService.getFullInfoProduct(this.uid).subscribe(product => {
      console.log(product);
      this.PRODUCT = product;
      this.collectionSize = this.PRODUCT.length;
      this.blockUIAllInfo.stop();
    });
  }

  addCart(product: ProductInterface) {
    this.productCart.id = product.id;
    this.productCart.name = product.name;
    this.productCart.measure = product.measure;
    this.productCart.quantity = this.fValue.quantity;
    var quantiyForm = this.stringToInt(this.fValue.quantity);
    var total = quantiyForm * this.stringToInt(product.total);
    var total2 = this.intToString(total);
    this.productCart.totalPrice = total2;
    console.log("this.productCartList.includes(this.productCart)", this.productCartList.some(e => e.id === this.productCart.id));

    if (this.productCartList.some(e => e.id === this.productCart.id)) {
      this.sumTotal(this.productCartList[this.productCartList.length - 1], true, quantiyForm);
      this.verifyProductIsInCart(this.productCartList, this.productCart, quantiyForm, product);
    } else {
      this.productCartList.push(this.productCart);
      this.sumTotal(this.productCartList[this.productCartList.length - 1], false, 0);
    }
    this.reset();
    console.log("this.productCartList.length > 0", this.productCartList.length > 0);
    console.log("this.productCartList[length - 1]", this.productCartList[this.productCartList.length - 1]);


    console.log(this.productCartList);
    localStorage.setItem('dataProductCart', JSON.stringify(this.productCartList));
    localStorage.setItem('totalProductCart', JSON.stringify(this.totalProduct));

  }

  verifyProductIsInCart(productCartList: Array<ProductCart>, productCart: ProductCart, quantity: number, product: ProductInterface) {
    productCartList.forEach(element => {
      if (element.id === productCart.id) {
        var quantityFlag = this.stringToInt(element.quantity);
        var totalQuantityFlag = quantityFlag + quantity;
        var totalQuantity = this.intToString(totalQuantityFlag);
        element.quantity = totalQuantity;

        var totalFlag = this.stringToInt(product.total) * quantity;
        var totalFinalFlag = this.stringToInt(element.totalPrice) + totalFlag;
        var totalFinal = this.intToString(totalFinalFlag);
        element.totalPrice = totalFinal;
      }
    });

  }

  sumTotal(product: ProductCart, igual: boolean, quantity: number) {
    if (igual) {
      this.totalProduct += quantity;
    } else {
      this.totalProduct += this.stringToInt(product.quantity);
    }

  }

  reset() {
    this.productCart = {};
    this.productInfo.reset();
  }

  stringToInt(value: string): number {
    var res = parseInt(value, 10);

    return res;
  }

  intToString(value: number): string {
    var res = value + "";

    return res;
  }

  getInfoUser() {
    this.userService.getOneUser(this.uid).subscribe(
      data => {

        this.nameCake = data.cakeName;
        this.addressCake = data.address;
      }
    );
  }

}
