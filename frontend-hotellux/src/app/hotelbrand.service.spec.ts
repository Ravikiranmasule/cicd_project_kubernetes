import { TestBed } from '@angular/core/testing';

import { HotelbrandService } from './hotelbrand.service';

describe('HotelbrandService', () => {
  let service: HotelbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
