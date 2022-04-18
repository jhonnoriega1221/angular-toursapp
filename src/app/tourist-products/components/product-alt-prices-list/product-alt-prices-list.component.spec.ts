import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAltPricesListComponent } from './product-alt-prices-list.component';

describe('ProductAltPricesListComponent', () => {
  let component: ProductAltPricesListComponent;
  let fixture: ComponentFixture<ProductAltPricesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAltPricesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAltPricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
