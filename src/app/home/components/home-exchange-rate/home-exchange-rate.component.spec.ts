import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExchangeRateComponent } from './home-exchange-rate.component';

describe('HomeExchangeRateComponent', () => {
  let component: HomeExchangeRateComponent;
  let fixture: ComponentFixture<HomeExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
