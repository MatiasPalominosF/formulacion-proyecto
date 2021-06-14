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

  /*public quantitypersons = [
    { id: 1, persons: '10 personas', prices: [{ id: 1, price: '12000' }] },
    { id: 2, persons: '15 personas', prices: [{ id: 2, price: '14000' }] },
    { id: 3, persons: '20 personas', prices: [{ id: 3, price: '18000' }] },
    { id: 4, persons: '25 personas', prices: [{ id: 4, price: '20000' }] },
    { id: 5, persons: '30 personas', prices: [{ id: 5, price: '24000' }] },
    { id: 6, persons: '40 personas', prices: [{ id: 6, price: '26000' }] },
    { id: 7, persons: '60 personas', prices: [{ id: 7, price: '30000' }] },
    { id: 8, persons: '80 personas', prices: [{ id: 8, price: '45000' }] },
  ];*/

  public quantitypersons = [
    { id: 1, persons: '10', price: '12000' },
    { id: 2, persons: '15', price: '14000' },
    { id: 3, persons: '20', price: '18000' },
    { id: 4, persons: '25', price: '20000' },
    { id: 5, persons: '30', price: '24000' },
    { id: 6, persons: '40', price: '26000' },
    { id: 7, persons: '60', price: '30000' },
    { id: 8, persons: '80', price: '45000' },
  ];

  public flavors = {};
  public prices = {};
  private cake = { id: 1, name: 'Torta', flavors: [] };
  private quantityperson = { id: 1, persons: '10 personas', prices: [] };

  get repeatFormGroup() {
    return this.orderInfo.get('repeatArray') as FormArray;
  }
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private deviceService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.orderInfo = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      address: [''],
      numberaddres: [''],
      reference: [''],
      comment: [''],
      repeatArray: this.formBuilder.array([this.createRepeat(this.quantityperson, this.cake)])
    });
    this.repeatList = this.orderInfo.get('repeatArray') as FormArray;
  }

  removeRepeat(index) {
    this.repeatList.removeAt(index);
  }
  addRepeat() {
    this.repeatList.push(this.createRepeat(this.quantityperson, this.cake));
  }

  createRepeat(quantityperson: any, cake: any): FormGroup {
    var flavors = this.cakes.filter(x => x.id == cake.id)[0].flavors;
    this.flavors = flavors;

    var prices = this.quantitypersons.filter(x => x.id == quantityperson.id)[0];
    console.log("añsljdñlasjdas", prices);
    this.prices = prices;
    return this.formBuilder.group({
      quantity: [''],
      cake: [cake.id, Validators.required],
      flavor: [flavors[0].id, Validators.required],
      quantitypersons: [quantityperson.id, Validators.required],
      price: [prices.price, Validators.required],
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

  onSelect(value: any, index: any): any {
    this.flavors = this.cakes.filter(x => x.id == value)[0].flavors;
    this.repeatList.controls[index].get('flavor').patchValue(this.stringToInt(this.flavors[0].id));


    //this.repeatFormGroup.controls['flavor'].patchValue(this.flavors[0], { onlySelf: true })
    /*this.repeatFormGroup.controls[index]['flavor'] = this.flavors[0].id;
    this.repeatFormGroup.controls[index].patchValue([{
      flavor: this.flavors[0].id
    }])*/


    /*this.repeatList[index].patchValue({
      price: this.flavors[0].id, options: { onlySelf: true }
    });*/
  }
  onSelect2(value: any, index: any): any {

    var prices = this.quantitypersons.filter(x => x.id == value)[0];
    //this.repeatList.controls[index].get('flavor').patchValue(this.stringToInt(this.prices[0].id));
    //this.repeatFormGroup.controls[index].patchValue(this.prices[0], { onlySelf: true });
    //this.repeatFormGroup.controls[index]['price'] = this.prices[0].id;
    /*this.repeatFormGroup.controls[index].patchValue([{
      price: this.prices[0].id, options: { onlySelf: true }
    }])
    this.repeatList[index].patchValue({
      price: this.prices[0].id, options: { onlySelf: true }
    });
    */
    // this.repeatList.controls[index].get('price').patchValue(this.stringToInt(this.prices[0].id))

    this.repeatList.controls[index].get('price').patchValue(this.stringToInt(prices.price))

    console.log(this.repeatFormGroup.controls);

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

    console.log("this.fValue", this.fValue);
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
