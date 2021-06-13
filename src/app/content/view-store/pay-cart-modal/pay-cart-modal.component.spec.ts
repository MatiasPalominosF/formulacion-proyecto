import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCartModalComponent } from './pay-cart-modal.component';

describe('PayCartModalComponent', () => {
  let component: PayCartModalComponent;
  let fixture: ComponentFixture<PayCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
