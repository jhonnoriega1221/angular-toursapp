import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceDialogComponent } from './product-price-dialog.component';

describe('ProductPriceDialogComponent', () => {
  let component: ProductPriceDialogComponent;
  let fixture: ComponentFixture<ProductPriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
