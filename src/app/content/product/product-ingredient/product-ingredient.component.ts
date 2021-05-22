import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge, startWith } from 'rxjs/operators';
import { ProductService } from 'src/app/_api/product/product.service';
import { Ingredient } from 'src/app/_models/ingredient';
import { Product } from 'src/app/_models/product2';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { NotificationService } from 'src/app/_services/notificacion.service';

@Component({
  selector: 'app-product-ingredient',
  templateUrl: './product-ingredient.component.html',
  styleUrls: ['./product-ingredient.component.css']
})
export class ProductIngredientComponent implements OnInit {

  @Input() public opc;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  searchProduct: Product;
  public submitted = false;
  public error = false;
  public measure = "";
  public quantity = "";
  private currentUser: any;
  private INGREDIENTSEARCH: Product[] = [];
  private ingredients: Ingredient[] = [];
  private ingredient: Ingredient = {};
  productSearch: Observable<Product[]>;
  filter = new FormControl('');
  collectionSize: number;
  pipe: any;
  productSortable: any;
  page = 1;
  pageSize = 4;

  constructor(
    public productService: ProductService,
    public activeModal: NgbActiveModal,
    private confirmationDialogService: ConfirmationDialogService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getUserLogged();
    this.getMaterial();
    if (Object.keys(this.productService.selectedProduct).length != 0) {
      //if (this.productService.selectedProduct.ingredients.length > 0) {
      if (this.opc) {
        console.log("Tiene ingredientes");
        this.getIngredients(this.productService.selectedProduct.ingredients);
        console.log("this.PRODUCT", this.ingredients);
      } else {
        this.getIngredients(this.productService.selectedProduct.ingredients);
        console.log("No tiene ingredients");
      }
    } else {
      console.log("no tiene nada");
    }
  }


  getMaterial() {
    this.productService.getMaterial(this.currentUser.uid).subscribe(
      data => {
        data.forEach(element => {
          this.INGREDIENTSEARCH.push(element);
        });
      }
    );
  }


  getIngredients(ingredients: Product[]) {
    ingredients.forEach(element => {
      this.productService.getProductById(this.currentUser.uid, element.id).subscribe(
        data => {
          console.log("element,", element.quantity);
          this.ingredient.id = element.id;
          this.ingredient.measure = element.measure;
          this.ingredient.name = data.name;
          this.ingredient.quantity = Number(element.quantity);
          this.ingredients.push(this.ingredient);
          this.collectionSize = this.ingredients.length;
          this.searchData(this.pipe);
          this.productSortable = this.ingredients;
          this.ingredient = {};
        }
      );
    });
  }

  search2 = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      merge(this.focus$),
      merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
      map((term) => {
        console.log({ term });
        return term === ''
          ? this.INGREDIENTSEARCH
          : this.INGREDIENTSEARCH
            .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
            .slice(0, 10)
      })
    );

  formatter = (x: { name: string }) => x.name;

  modelChangeFn(event: any) {
    this.measure = "";
    console.log("this.searchProduct2222:", this.searchProduct);
    if (this.searchProduct == "" || this.searchProduct.measure === undefined) {
      return;
    } else {
      this.measure = this.setMeasure(this.searchProduct.measure);

    }
  }

  modelChangeFn2(event: any) {
    this.submitted = false;
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  setMeasure(measure: string): string {
    switch (measure) {
      case '1':
        return "Kg";
      case '2':
        return "G";
      case '3':
        return "L";
      case '4':
        return "Cc";
      case '5':
        return "Ml";
      case '6':
        return "Un";
      default:
        return "";
    }
  }

  addNewIngredient() {
    this.submitted = true;
    if (this.quantity == "") {
      this.error = true;
      return;
    }
    if (this.searchProduct == "" || this.searchProduct == undefined) {
      console.log("ERROR");
    } else {
      this.ingredient.id = this.searchProduct.id;
      this.ingredient.name = this.searchProduct.name;
      this.ingredient.quantity = parseInt(this.quantity, 10);
      this.ingredient.measure = this.setMeasure(this.searchProduct.measure);
      if (this.ingredients.some(e => e.id === this.ingredient.id)) {
        this.ingredients.forEach(element => {
          if (element.id == this.ingredient.id) {
            var sum = 0;
            sum = element.quantity + this.ingredient.quantity;
            element.quantity = sum;
          }
        });
      } else {
        this.ingredients.push(this.ingredient);
      }
      this.quantity = "";
      this.searchProduct = {};
      this.ingredient = {};
      this.collectionSize = this.ingredients.length;
      this.searchData(this.pipe);
      this.submitted = false;
    }

  }

  onDeleteIngredient(id: string) {
    this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el ingrediente?')
      .then(confirmed => {
        if (!confirmed) {
        } else {
          this.ingredients.forEach(element => {
            if (element.id === id) {
              var i = this.ingredients.indexOf(element);
              if (i !== -1) {
                this.ingredients.splice(i, 1);
                this.collectionSize = this.ingredients.length;
                this.searchData(this.pipe);
              }
            }
          });
          this.notifyService.showSuccess("Eliminar", "¡El ingrediente se eliminó correctamente!");
        }
      }).catch(() => {
        console.log("Not ok");
      });
  }

  onIngredientSubmit() {
    this.productService.ingredientsSelected = this.ingredients;
    console.log("this.productService.ingredientsSelected", this.productService.ingredientsSelected);
    if (this.opc) {
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      this.passEntry.emit(false);
      this.activeModal.close(false);
    }


  }
  /**
  *
  * '@param' pipe
  */
  searchData(pipe: DecimalPipe) {
    this.productSearch = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  /**
   * Search table
   * '@param' text
   * '@param' pipe
   */
  search(text: string, pipe: PipeTransform) {
    return this.ingredients.filter(response => {
      const term = text.toLowerCase();
      return response.name.toLowerCase().includes(term)
        || response.measure.toLowerCase().includes(term)
    });
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
