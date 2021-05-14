import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ClientService } from 'src/app/_api/client/client.service';
import { ProductService } from 'src/app/_api/product/product.service';
import { SaleService } from 'src/app/_api/sale/sale.service';
import { Product } from 'src/app/_models/product2';
import { NotificationService } from 'src/app/_services/notificacion.service';

@Component({
  selector: 'app-pay-sale',
  templateUrl: './pay-sale.component.html',
  styleUrls: ['./pay-sale.component.css']
})
export class PaySaleComponent implements OnInit {

  @Input() public saldoTotal: number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @BlockUI('searchClientInfo') blockUISearchClient: NgBlockUI;

  public payFormGroup: FormGroup;
  private saldoFlag: number;
  private sedescuenta: number = 0;
  private currentUser: any;
  public submittedSearch = false;
  public submitted = false;
  public showData = false;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    public productService: ProductService,
    private saleService: SaleService,
    private clientService: ClientService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    console.log("this.saldoTotal", this.saldoTotal);

    this.payFormGroup = this.formBuilder.group({
      rut: ['', Validators.required],
      amount: [''],
      paidWith: ['', Validators.required],
      change: [''],
      discount: [''],
      nameclient: [''],
      withdiscount: [''],
    });

    this.cargarDatos();
    this.getUserLogged();

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
    this.f['amount'].patchValue(this.saldoTotal);
  }

  onPaySubmit() {
    this.submitted = true;

    if (this.f['paidWith'].invalid) {
      return;
    }

    if (this.showData === true) {
      this.productService.productListSelected.forEach(element => {
        if (element.totalPrice < this.sedescuenta) { }
        else {
          element.totalPrice = element.totalPrice - this.sedescuenta;
        }
      });
      this.updateStock(this.productService.productListSelected, this.currentUser.uid);
      this.addSale(this.productService.productListSelected, this.currentUser.uid);
      this.saldoTotal = 0;
      this.passEntry.emit(true);
      this.activeModal.close(true);
    } else {
      this.updateStock(this.productService.productListSelected, this.currentUser.uid);
      this.addSale(this.productService.productListSelected, this.currentUser.uid);
      this.saldoTotal = 0;
      this.passEntry.emit(true);
      this.activeModal.close(true);
    }
  }

  searchClient(): void {
    this.submittedSearch = true;

    if (this.f['rut'].invalid) {
      return;
    }

    this.blockUISearchClient.start('Cargando...');
    this.clientService.getOneClient(this.fValue.rut, this.currentUser.uid).subscribe(
      data => {
        if (data == null) {
          this.saldoTotal = this.saldoFlag;
          this.notifyService.showWarning("Aviso", "¡Usuario no encontrado!");
          this.showData = false;
          this.sedescuenta = 0;
          this.f['paidWith'].patchValue('');
          this.f['change'].patchValue('');
          this.f['discount'].patchValue('');
          this.f['nameclient'].patchValue('');
          this.f['withdiscount'].patchValue('');
        } else {
          this.showData = true;
          this.f['paidWith'].patchValue('');
          this.f['change'].patchValue('');
          this.f['discount'].patchValue(data.percent);
          this.f['nameclient'].patchValue(data.name + ' ' + data.lastname);
          this.sedescuenta = this.saldoTotal * (parseInt(data.percent, 10) / 100);
          var withDisc = this.saldoTotal - this.sedescuenta;
          this.f['withdiscount'].patchValue(withDisc);
          this.saldoFlag = this.saldoTotal;
          this.saldoTotal = withDisc;
        }
        this.blockUISearchClient.stop();


      }
    );
  }


  addSale(productList: Array<Product>, uidBoss: string): void {
    productList.forEach(element => {
      var dateSale = new Date();
      element.date = dateSale;
      this.saleService.addSaleProduct(element, uidBoss);
    });
  }

  updateStock(productList: Array<Product>, uidBoss: string): void {
    productList.forEach(element => {
      var stockF = element.stock;
      var stockR = element.quantity;

      var stockFint = this.stringToInt(stockF);

      var stockRestante = this.intToString((stockFint - stockR));

      this.productService.updateFieldOnProduct(element.id, uidBoss, stockRestante);
    });
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
