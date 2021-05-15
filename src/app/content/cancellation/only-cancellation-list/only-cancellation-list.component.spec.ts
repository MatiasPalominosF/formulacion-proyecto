import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyCancellationListComponent } from './only-cancellation-list.component';

describe('OnlyCancellationListComponent', () => {
  let component: OnlyCancellationListComponent;
  let fixture: ComponentFixture<OnlyCancellationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyCancellationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyCancellationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
