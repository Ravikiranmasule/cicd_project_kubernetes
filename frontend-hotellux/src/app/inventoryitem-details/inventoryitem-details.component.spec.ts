import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryitemDetailsComponent } from './inventoryitem-details.component';

describe('InventoryitemDetailsComponent', () => {
  let component: InventoryitemDetailsComponent;
  let fixture: ComponentFixture<InventoryitemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryitemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryitemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
