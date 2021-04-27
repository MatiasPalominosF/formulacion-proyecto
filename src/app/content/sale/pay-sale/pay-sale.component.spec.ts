import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySaleComponent } from './pay-sale.component';

describe('PaySaleComponent', () => {
  let component: PaySaleComponent;
  let fixture: ComponentFixture<PaySaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
