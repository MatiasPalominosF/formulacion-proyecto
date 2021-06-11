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
  public projectInfo: FormGroup;
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
      comment: ['', Validators.required],
    });
    console.log("dataProductCart", this.dataProductCart);
  }


  onChange(event: any) {
    console.log("event", event);
    this.pedido = event;
  }
}
