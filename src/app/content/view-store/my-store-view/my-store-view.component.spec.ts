import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoreViewComponent } from './my-store-view.component';

describe('MyStoreViewComponent', () => {
  let component: MyStoreViewComponent;
  let fixture: ComponentFixture<MyStoreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStoreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
