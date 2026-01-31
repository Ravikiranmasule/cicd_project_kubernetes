import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDashDetailsComponent } from './staff-dash-details.component';

describe('StaffDashDetailsComponent', () => {
  let component: StaffDashDetailsComponent;
  let fixture: ComponentFixture<StaffDashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDashDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
