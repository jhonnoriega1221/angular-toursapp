import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAltPricesButtonComponent } from './product-alt-prices-button.component';

describe('ProductAltPricesButtonComponent', () => {
  let component: ProductAltPricesButtonComponent;
  let fixture: ComponentFixture<ProductAltPricesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAltPricesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAltPricesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
