import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/_api/product/product.service';

@Component({
  selector: 'app-pay-sale',
  templateUrl: './pay-sale.component.html',
  styleUrls: ['./pay-sale.component.css']
})
export class PaySaleComponent implements OnInit {

  @Input() public saldoTotal: number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public payFormGroup: FormGroup;
  private currentUser: any;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    public productService: ProductService,
    public productService2: ProductService) { }

  ngOnInit(): void {
    console.log("this.saldoTotal", this.saldoTotal);

    this.payFormGroup = this.formBuilder.group({
      amount: ['', Validators.required],
      paidWith: ['', Validators.required],
      change: ['', Validators.required]
    });

    this.cargarDatos();
    this.getUserLogged();

    //this.productService.updateFieldOnProduct("yhfZDMsLSlOek8QYu1bE", this.currentUser.uid, "49");
  }

  getUserLogged(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  get f() {
    return this.payFormGroup.controls;
  }

  get fValue() {
    return this.payFormGroup.value;
  }

  cargarDatos() {
    console.log("this.productService.productListSelected: ", this.productService.productListSelected);
    this.f['amount'].patchValue(this.saldoTotal);
  }

  onPaySubmit() {
    console.log("Valor form: ", this.fValue);
    this.productService.productListSelected.forEach(element => {
      var stockF = element.stock;
      var stockR = element.quantity;

      var stockFint = this.stringToInt(stockF);

      var stockRestante = this.intToString((stockFint - stockR));

      this.productService.updateFieldOnProduct(element.id, this.currentUser.uid, stockRestante);
      this.passEntry.emit(true);
      this.activeModal.close(true);

      /*this.productService.getProductById(this.currentUser.uid, element.id).subscribe(data => {
        

        

      });*/
    });
  }

  actualizarStock(id, uid, stock) {
    this.productService2.updateFieldOnProduct(id, uid, stock);
  }

  stringToInt(value: string): number {
    var res = parseInt(value, 10);

    return res;
  }

  intToString(value: number): string {
    var res = value + "";

    return res;
  }

  calChange(event: any) {
    if (event == "") {
      this.f['change'].patchValue(0);
    } else {
      var change = event - this.saldoTotal;
      this.f['change'].patchValue(change);
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
