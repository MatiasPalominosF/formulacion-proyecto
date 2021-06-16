import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedOrderComponent } from './personalized-order.component';

describe('PersonalizedOrderComponent', () => {
  let component: PersonalizedOrderComponent;
  let fixture: ComponentFixture<PersonalizedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
