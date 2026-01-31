import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryitemEditComponent } from './inventoryitem-edit.component';

describe('InventoryitemEditComponent', () => {
  let component: InventoryitemEditComponent;
  let fixture: ComponentFixture<InventoryitemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryitemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
