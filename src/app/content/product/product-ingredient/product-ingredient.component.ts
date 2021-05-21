import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_api/product/product.service';
import { ProductInterface } from 'src/app/_models/product';

@Component({
  selector: 'app-product-ingredient',
  templateUrl: './product-ingredient.component.html',
  styleUrls: ['./product-ingredient.component.css']
})
export class ProductIngredientComponent implements OnInit {

  @Input() public opc;
  private currentUser: any;
  private PRODUCT: ProductInterface[] = [];

  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getUserLogged();
    console.log("opc: ", this.opc);

    if (Object.keys(this.productService.selectedProduct).length != 0) {
      if (this.productService.selectedProduct.ingredients.length > 0) {
        console.log("Tiene ingredientes");
        console.log("this.productService.selectedProduct.ingredients", this.productService.selectedProduct.ingredients);
        this.getIngredients(this.productService.selectedProduct.ingredients);
        console.log("this.PRODUCT", this.PRODUCT);
      } else {
        console.log("No tiene ingredients");
      }
    } else {
      console.log("no tiene nada");
    }
  }

  getIngredients(ingredients: ProductInterface[]) {
    ingredients.forEach(element => {
      this.productService.getProductById(this.currentUser.uid, element.id).subscribe(
        data => {
          this.PRODUCT.push(data);
          console.log(this.PRODUCT);
        }
      );
    });

  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
