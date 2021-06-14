import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-personalized-order',
  templateUrl: './personalized-order.component.html',
  styleUrls: ['./personalized-order.component.css']
})
export class PersonalizedOrderComponent implements OnInit {
  public orderInfo: FormGroup;
  public repeatList: FormArray;
  private order: Order = {};
  public submitted = false;
  public submitted2 = false;
  public pedido: boolean = false;

  public cakes = [
    { id: 1, name: 'Torta', flavors: ['Mil hojas', 'Manjar plátano', 'Chocolate manjar', 'Selva negra', 'Crema piña', 'Crema durazno', 'Consuelo', 'Manjar lúcuma', 'Pompadour', 'Lúcuma', 'Plátano', 'Chirimoya', 'Almendra', 'Piña', 'Frambuesa'] },
  ];

  public quantitypersons = [
    { id: 1, persons: '10 personas', prices: ['12000'] },
    { id: 2, persons: '15 personas', prices: ['14000'] },
    { id: 3, persons: '20 personas', prices: ['18000'] },
    { id: 4, persons: '25 personas', prices: ['20000'] },
    { id: 5, persons: '30 personas', prices: ['24000'] },
    { id: 6, persons: '40 personas', prices: ['26000'] },
    { id: 7, persons: '60 personas', prices: ['30000'] },
    { id: 8, persons: '80 personas', prices: ['45000'] },
  ];

  public flavors = {};
  public prices = {};

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private deviceService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.flavors = this.cakes.filter(x => x.id == 1)[0].flavors;
    this.prices = this.quantitypersons.filter(x => x.id == 1)[0].prices;
    this.orderInfo = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      address: [''],
      numberaddres: [''],
      reference: [''],
      comment: [''],
      repeatArray: this.formBuilder.array([this.createRepeat()])
    });
    this.repeatList = this.orderInfo.get('repeatArray') as FormArray;
  }

  get repeatFormGroup() {
    return this.orderInfo.get('repeatArray') as FormArray;
  }
  removeRepeat(index) {
    this.repeatList.removeAt(index);
  }
  addRepeat() {
    this.repeatList.push(this.createRepeat());
  }

  createRepeat(): FormGroup {
    return this.formBuilder.group({
      cake: ['', Validators.required],
      flavor: ['', Validators.required],
      quantitypersons: ['', Validators.required],
      price: ['', Validators.required],
    });
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
  }
  onSelect2(value: any): any {
    this.prices = this.quantitypersons.filter(x => x.id == value)[0].prices;
  }

  onChange(event: any) {
    console.log("event", event);
    this.pedido = event;
    if (event) {
      this.setValidators('address');
      this.setValidators('numberaddres');
      this.setValidators('reference');
    } else {
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

    if (this.isInvalid('firstname') || this.isInvalid('lastname') || this.isInvalid('phone')) {
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

    } else {
      this.order.firstname = this.fValue.firstname;
      this.order.lastname = this.fValue.lastname;
      this.order.phone = this.fValue.phone;

    }

  }

}
