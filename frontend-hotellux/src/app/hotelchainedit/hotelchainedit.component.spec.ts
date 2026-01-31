import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelchaineditComponent } from './hotelchainedit.component';

describe('HotelchaineditComponent', () => {
  let component: HotelchaineditComponent;
  let fixture: ComponentFixture<HotelchaineditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelchaineditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelchaineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
