import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInventoryItemComponent } from './register-inventory-item.component';

describe('RegisterInventoryItemComponent', () => {
  let component: RegisterInventoryItemComponent;
  let fixture: ComponentFixture<RegisterInventoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInventoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
