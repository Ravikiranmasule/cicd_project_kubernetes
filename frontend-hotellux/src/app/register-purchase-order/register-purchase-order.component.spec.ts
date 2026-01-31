import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPurchaseOrderComponent } from './register-purchase-order.component';

describe('RegisterPurchaseOrderComponent', () => {
  let component: RegisterPurchaseOrderComponent;
  let fixture: ComponentFixture<RegisterPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPurchaseOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
