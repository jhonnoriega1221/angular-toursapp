import { TestBed } from '@angular/core/testing';

import { TouristProductService } from './tourist-product.service';

describe('TouristProductService', () => {
  let service: TouristProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
