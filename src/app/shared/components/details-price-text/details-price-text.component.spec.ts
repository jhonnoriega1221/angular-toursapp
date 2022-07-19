import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPriceTextComponent } from './details-price-text.component';

describe('DetailsPriceTextComponent', () => {
  let component: DetailsPriceTextComponent;
  let fixture: ComponentFixture<DetailsPriceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPriceTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPriceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
