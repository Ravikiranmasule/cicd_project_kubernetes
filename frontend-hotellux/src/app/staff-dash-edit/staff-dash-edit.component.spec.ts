import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashEditComponent } from './staff-dash-edit.component';

describe('StaffDashEditComponent', () => {
  let component: StaffDashEditComponent;
  let fixture: ComponentFixture<StaffDashEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDashEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDashEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
