import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCart } from 'src/app/_models/productCart';

@Component({
  selector: 'app-pay-cart-modal',
  templateUrl: './pay-cart-modal.component.html',
  styleUrls: ['./pay-cart-modal.component.css']
})
export class PayCartModalComponent implements OnInit {
  @Input() public dataProductCart: Array<ProductCart>;
  @Input() public totalPriceProducts: number;
  public projectInfo: FormGroup;
  headElements = ['Cantidad', 'Producto', 'Precio unitario ($)', 'Precio total ($)'];
  public pedido: boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.projectInfo = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      numberaddres: ['', Validators.required],
      reference: ['', Validators.required],
      comment: ['', Validators.required],
    });
    console.log("dataProductCart", this.dataProductCart);
    console.log("dataProductCart", this.totalPriceProducts);
  }


  onChange(event: any) {
    console.log("event", event);
    this.pedido = event;
  }
}
