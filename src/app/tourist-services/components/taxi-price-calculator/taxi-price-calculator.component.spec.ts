import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPriceCalculatorComponent } from './taxi-price-calculator.component';

describe('TaxiPriceCalculatorComponent', () => {
  let component: TaxiPriceCalculatorComponent;
  let fixture: ComponentFixture<TaxiPriceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiPriceCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiPriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
