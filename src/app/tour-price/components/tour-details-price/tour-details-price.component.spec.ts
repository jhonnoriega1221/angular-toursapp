import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPriceComponent } from './tour-details-price.component';

describe('TourDetailsPriceComponent', () => {
  let component: TourDetailsPriceComponent;
  let fixture: ComponentFixture<TourDetailsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
