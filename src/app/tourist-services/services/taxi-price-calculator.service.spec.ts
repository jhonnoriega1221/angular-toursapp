import { TestBed } from '@angular/core/testing';

import { TaxiPriceCalculatorService } from './taxi-price-calculator.service';

describe('TaxiPriceCalculatorService', () => {
  let service: TaxiPriceCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiPriceCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
