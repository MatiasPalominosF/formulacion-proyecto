import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-sale',
  templateUrl: './pay-sale.component.html',
  styleUrls: ['./pay-sale.component.css']
})
export class PaySaleComponent implements OnInit {

  @Input() public saldoTotal: number;

  constructor() { }

  ngOnInit(): void {
    console.log("this.saldoTotal", this.saldoTotal);
  }

}
