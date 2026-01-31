import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRegisterComponent } from './maintenance-register.component';

describe('MaintenanceRegisterComponent', () => {
  let component: MaintenanceRegisterComponent;
  let fixture: ComponentFixture<MaintenanceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
