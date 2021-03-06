import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Order } from 'src/app/_models/order';
import { ProductCart } from 'src/app/_models/productCart';

@Component({
  selector: 'app-pay-cart-modal',
  templateUrl: './pay-cart-modal.component.html',
  styleUrls: ['./pay-cart-modal.component.css']
})
export class PayCartModalComponent implements OnInit {
  @Input() public dataProductCart: Array<ProductCart>;
  @Input() public totalPriceProducts: number;
  @Input() public phoneCakeShop: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  public projectInfo: FormGroup;
  private order: Order = {};
  public submitted = false;
  public submitted2 = false;
  public headElements = ['Cantidad', 'Producto', 'Precio unitario ($)', 'Precio total ($)'];
  public pedido: boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private deviceService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.projectInfo = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      address: [''],
      numberaddres: [''],
      reference: [''],
      comment: [''],
    });
    console.log("dataProductCart", this.dataProductCart);
    console.log("dataProductCart", this.totalPriceProducts);
    console.log("phoneCakeShop", this.phoneCakeShop);

  }

  get f() {
    return this.projectInfo.controls;
  }

  get fValue() {
    return this.projectInfo.value;
  }

  get isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  get isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  get isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }

  onChange(event: any) {
    console.log("event", event);
    this.pedido = event;
    if (event) {
      this.totalPriceProducts += 1500;
      this.setValidators('address');
      this.setValidators('numberaddres');
      this.setValidators('reference');
    } else {
      this.f['address'].patchValue('');
      this.f['numberaddres'].patchValue('');
      this.f['numberaddres'].patchValue('');
      this.submitted2 = false;
      this.totalPriceProducts -= 1500;
      this.clearValidators('address');
      this.clearValidators('numberaddres');
      this.clearValidators('numberaddres');
    }
  }

  setValidators(controlName: string) {
    this.f[controlName].setValidators(Validators.required);
  }

  clearValidators(controlName: string) {
    this.f[controlName].clearValidators();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.projectInfo.get(controlName).hasError(errorName);
  };

  private isInvalid = (controlName: string) => {
    return this.projectInfo.get(controlName).invalid;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectInfo);

    console.log("this.isInvalid('firstname')", this.isInvalid('firstname'));

    if (this.isInvalid('firstname') || this.isInvalid('lastname') || this.isInvalid('phone')) {
      return;
    }

    var url = "";
    var urlwtsp = "";
    var mensaje = "";
    var productos = "";
    var flag = false;

    console.log("this.isDesktop", this.isDesktop);
    console.log("this.isDevice", this.isMobile);
    if (this.isDesktop) {
      urlwtsp = "https://web.whatsapp.com/";
    } else if (this.isMobile || this.isTablet) {
      urlwtsp = "whatsapp://"
    }

    if (this.fValue.comment != "") {
      this.order.comment = this.fValue.comment;
      flag = true;
    }

    if (this.pedido) {
      this.submitted2 = true;
      if (this.isInvalid('address') || this.isInvalid('numberaddres') || this.isInvalid('reference')) {
        return;
      }
      this.order.firstname = this.fValue.firstname;
      this.order.lastname = this.fValue.lastname;
      this.order.phone = this.fValue.phone;
      this.order.address = this.fValue.address;
      this.order.numberaddres = this.fValue.numberaddres;
      this.order.reference = this.fValue.reference;

      if (flag) {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Dirección:_ " + this.order.address + "," + this.order.numberaddres + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Referencia:_ " + this.order.reference + "%0A-_Comentario:_ " + this.order.comment + "%0A";
      } else {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Dirección:_ " + this.order.address + "," + this.order.numberaddres + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Referencia:_ " + this.order.reference + "%0A";
      }

      var total = "%0A*_---- Total: " + "$" + this.totalPriceProducts + " ----_*" + "%0A*_ENVÍO A DOMICILIO_*";

      //url = urlwtsp + mensaje + productos + total;
    } else {
      this.order.firstname = this.fValue.firstname;
      this.order.lastname = this.fValue.lastname;
      this.order.phone = this.fValue.phone;

      if (flag) {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Comentario:_ " + this.order.comment + "%0A";
      } else {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Contacto:_ " + this.order.phone + "%0A";
      }

      var total = "%0A*_---- Total: " + "$" + this.totalPriceProducts + " ----_*" + "%0A*_RETIRO EN TIENDA_*";

    }

    var i = 1;
    this.dataProductCart.forEach(element => {
      if (i == 1) {
        productos += "```Información del pedido```%0A-_Productos:_ " + element.quantity + "x " + element.name + " " + "$" + element.unitPrice + " c/u ";
      }
      else if (i == this.dataProductCart.length) {
        productos += "- " + element.quantity + "x " + element.name + " " + "$" + element.unitPrice + " c/u";

      } else {
        productos += "- " + element.quantity + "x " + element.name + " " + "$" + element.unitPrice + " c/u ";
      }
      i += 1;
    });

    url = urlwtsp + mensaje + productos + total;
    console.log(url);
    this.passEntry.emit(true);
    this.activeModal.close(true);
    window.open(url, "_blank");

  }
}
