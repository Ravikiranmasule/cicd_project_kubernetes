import { TestBed } from '@angular/core/testing';

import { HotelchainService } from './hotelchain.service';

describe('HotelchainService', () => {
  let service: HotelchainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelchainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
