import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAmenitiesComponent } from './guest-amenities.component';

describe('GuestAmenitiesComponent', () => {
  let component: GuestAmenitiesComponent;
  let fixture: ComponentFixture<GuestAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestAmenitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
