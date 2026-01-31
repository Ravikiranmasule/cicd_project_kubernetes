import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelchainComponent } from './hotelchain.component';

describe('HotelchainComponent', () => {
  let component: HotelchainComponent;
  let fixture: ComponentFixture<HotelchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
