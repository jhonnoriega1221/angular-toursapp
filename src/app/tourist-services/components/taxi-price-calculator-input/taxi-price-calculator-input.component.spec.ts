import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPriceCalculatorInputComponent } from './taxi-price-calculator-input.component';

describe('TaxiPriceCalculatorInputComponent', () => {
  let component: TaxiPriceCalculatorInputComponent;
  let fixture: ComponentFixture<TaxiPriceCalculatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiPriceCalculatorInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiPriceCalculatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
