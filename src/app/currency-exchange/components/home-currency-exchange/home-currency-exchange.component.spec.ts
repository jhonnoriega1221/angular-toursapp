import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrencyExchangeComponent } from './home-currency-exchange.component';

describe('HomeCurrencyExchangeComponent', () => {
  let component: HomeCurrencyExchangeComponent;
  let fixture: ComponentFixture<HomeCurrencyExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCurrencyExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
