import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashRegisterComponent } from './staff-dash-register.component';

describe('StaffDashRegisterComponent', () => {
  let component: StaffDashRegisterComponent;
  let fixture: ComponentFixture<StaffDashRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDashRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDashRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
