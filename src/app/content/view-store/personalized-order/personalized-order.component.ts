import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Order } from 'src/app/_models/order';
import { OrderProduct } from 'src/app/_models/order-product';
import { NotificationService } from 'src/app/_services/notificacion.service';

@Component({
  selector: 'app-personalized-order',
  templateUrl: './personalized-order.component.html',
  styleUrls: ['./personalized-order.component.css']
})
export class PersonalizedOrderComponent implements OnInit {
  @Input() public phoneCakeShop: string;
  public orderInfo: FormGroup;
  private order: Order = {};
  public submitted = false;
  public submitted2 = false;
  public submittedPreOrder = false;
  public pedido: boolean = false;
  public total: number = 0;
  private orderProduct: OrderProduct = {};
  public orderProducts: Array<OrderProduct> = [];
  public headElements = ['Cantidad', 'Producto', 'Personas', 'Precio unitario ($)', 'Precio total ($)'];
  public cakes = [
    {
      id: 1, name: 'Torta', flavors: [
        { id: 1, name: 'Mil hojas' },
        { id: 2, name: 'Manjar plátano' },
        { id: 3, name: 'Chocolate manjar' },
        { id: 4, name: 'Selva negra' },
        { id: 5, name: 'Crema piña' },
        { id: 6, name: 'Crema durazno' },
        { id: 7, name: 'Consuelo' },
        { id: 8, name: 'Manjar lúcuma' },
        { id: 9, name: 'Pompadour' },
        { id: 10, name: 'Lúcuma' },
        { id: 11, name: 'Plátano' },
        { id: 12, name: 'Chirimoya' },
        { id: 13, name: 'Almendra' },
        { id: 14, name: 'Piña' },
        { id: 15, name: 'Frambuesa' },
      ]
    },
  ];

  public quantitypersons = [
    { id: 1, persons: '10', price: 12000 },
    { id: 2, persons: '15', price: 14000 },
    { id: 3, persons: '20', price: 18000 },
    { id: 4, persons: '25', price: 20000 },
    { id: 5, persons: '30', price: 24000 },
    { id: 6, persons: '40', price: 26000 },
    { id: 7, persons: '60', price: 30000 },
    { id: 8, persons: '80', price: 45000 },
  ];

  public flavors = {};
  public prices = {};
  private cake = { id: 1, name: 'Torta', flavors: [] };
  private quantityperson = { id: 1, persons: '10', prices: [] };

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private deviceService: DeviceDetectorService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.orderInfo = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(1)]],
      cake: ['', Validators.required],
      flavor: ['', Validators.required],
      quantitypersons: ['', Validators.required],
      unitprice: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      address: [''],
      numberaddres: [''],
      reference: [''],
      comment: [''],
    });

    this.setDefaultValues();
  }

  setDefaultValues() {
    var flavors = this.cakes.filter(x => x.id == this.cake.id)[0].flavors;
    this.flavors = flavors;

    var prices = this.quantitypersons.filter(x => x.id == this.quantityperson.id)[0];
    this.prices = prices;

    this.orderInfo.patchValue({
      quantity: 1,
      cake: this.cake.id,
      flavor: flavors[0].id,
      quantitypersons: this.quantityperson.id,
      unitprice: prices.price
    });
  }

  stringToInt(value: string): number {
    var res = parseInt(value, 10);

    return res;
  }

  get f() {
    return this.orderInfo.controls;
  }

  get fValue() {
    return this.orderInfo.value;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.orderInfo.get(controlName).hasError(errorName);
  };

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSelect(value: any): any {
    this.flavors = this.cakes.filter(x => x.id == value)[0].flavors;
    this.orderInfo.get('flavor').patchValue(this.stringToInt(this.flavors[0].id));
  }

  onSelect2(value: any): any {
    var prices = this.quantitypersons.filter(x => x.id == value)[0];
    this.orderInfo.get('unitprice').patchValue(prices.price)
  }

  addProduct() {
    this.submittedPreOrder = true;
    if (this.isInvalid('quantity')) {
      return;
    }
    var price = 0;
    var flavor = this.cakes.filter(x => x.id == this.orderInfo.get('cake').value)[0].flavors.filter(x => x.id == this.orderInfo.get('flavor').value)[0].name;
    price = this.stringToInt(this.orderInfo.get('unitprice').value) * this.stringToInt(this.orderInfo.get('quantity').value);

    var quantity = this.stringToInt(this.orderInfo.get('quantity').value);
    var quantitypersons = this.quantitypersons.filter(x => x.id == this.orderInfo.get('quantitypersons').value)[0].persons;
    var cake = this.cakes.filter(x => x.id == this.orderInfo.get('cake').value)[0].name;
    var unitprice = this.orderInfo.get('unitprice').value;
    if (this.orderProducts.find(x => x.flavor == flavor) && this.orderProducts.find(x => x.quantitypersons == quantitypersons)) {
      this.orderProduct.quantity = quantity + this.orderProducts.filter(x => x.flavor == flavor && x.quantitypersons == quantitypersons)[0].quantity;
      this.orderProduct.quantitypersons = quantitypersons;
      this.orderProduct.cake = cake;
      this.orderProduct.flavor = flavor;
      this.orderProduct.totalprice = this.orderProducts.filter(x => x.flavor == flavor && x.quantitypersons == quantitypersons)[0].totalprice + price;
      this.orderProduct.unitprice = unitprice;

      console.log("this.orderProduct", this.orderProduct);
      let index = this.orderProducts.indexOf(this.orderProducts.filter(x => x.flavor == flavor && x.quantitypersons == quantitypersons)[0]);

      this.orderProducts[index] = this.orderProduct;

    } else {
      this.orderProduct.quantity = quantity;
      this.orderProduct.quantitypersons = quantitypersons;
      this.orderProduct.cake = cake;
      this.orderProduct.flavor = flavor;
      this.orderProduct.unitprice = unitprice;
      this.orderProduct.totalprice = price;
      this.orderProducts.push(this.orderProduct);
    }
    this.total += price;

    this.reset();
    console.log("this.orderProduct", this.orderProducts);

  }

  reset() {
    this.orderProduct = {};
    this.setDefaultValues();
  }

  onChange(event: any) {
    console.log("event", event);
    this.pedido = event;
    if (event) {
      this.total += 1500;
      this.setValidators('address');
      this.setValidators('numberaddres');
      this.setValidators('reference');
    } else {
      this.total -= 1500;
      this.f['address'].patchValue('');
      this.f['numberaddres'].patchValue('');
      this.f['numberaddres'].patchValue('');
      this.submitted2 = false;
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

  private isInvalid = (controlName: string) => {
    return this.orderInfo.get(controlName).invalid;
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

  onSubmit(): void {
    this.submitted = true;


    console.log("this.fValue", this.fValue);
    if (this.orderProducts.length == 0) {
      this.notifyService.showError("Productos", "¡Es necesario añadir un producto para continuar!");
      return;
    }
    else if (this.isInvalid('firstname') || this.isInvalid('lastname') || this.isInvalid('phone')) {
      return;
    }


    var url = "";
    var urlwtsp = "";
    var mensaje = "";
    var productos = "";
    var flag = false;

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
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido personalizado*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Dirección:_ " + this.order.address + "," + this.order.numberaddres + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Referencia:_ " + this.order.reference + "%0A-_Comentario:_ " + this.order.comment + "%0A";
      } else {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido personalizado*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Dirección:_ " + this.order.address + "," + this.order.numberaddres + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Referencia:_ " + this.order.reference + "%0A";
      }

      var total = "%0A*_---- Total: " + "$" + this.total + " ----_*" + "%0A*_ENVÍO A DOMICILIO_*";
    } else {
      this.order.firstname = this.fValue.firstname;
      this.order.lastname = this.fValue.lastname;
      this.order.phone = this.fValue.phone;

      if (flag) {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido personalizado*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Contacto:_ " + this.order.phone + "%0A-_Comentario:_ " + this.order.comment + "%0A";
      } else {
        mensaje = "send?phone=56" + this.phoneCakeShop + "&text=*Nuevo pedido personalizado*%0A```Información del usuario```%0A-_Nombre:_ " + this.order.firstname + " " + this.order.lastname + "%0A-_Contacto:_ " + this.order.phone + "%0A";
      }

      var total = "%0A*_---- Total: " + "$" + this.total + " ----_*" + "%0A*_RETIRO EN TIENDA_*";
    }

    var i = 1;
    this.orderProducts.forEach(element => {
      if (i == 1) {
        productos += "```Información del pedido```%0A-_Productos:_ " + element.quantity + "x " + element.cake + " " + element.flavor + " " + "para " + element.quantitypersons + " personas " + element.unitprice + "$" + " c/u ";
      }
      else if (i == this.orderProducts.length) {
        productos += "- " + element.quantity + "x " + element.cake + " " + element.flavor + " " + "para " + element.quantitypersons + " personas " + element.unitprice + "$" + " c/u";

      } else {
        productos += "- " + element.quantity + "x " + element.cake + " " + element.flavor + " " + "para " + element.quantitypersons + " personas " + element.unitprice + "$" + " c/u ";
      }
      i += 1;
    });

    url = urlwtsp + mensaje + productos + total;
    console.log("url", url);
  }

}
