import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsPricesComponent } from './food-details-prices.component';

describe('FoodDetailsPricesComponent', () => {
  let component: FoodDetailsPricesComponent;
  let fixture: ComponentFixture<FoodDetailsPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetailsPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
