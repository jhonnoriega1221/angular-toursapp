import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailsPricesComponent } from './museum-details-prices.component';

describe('MuseumDetailsPricesComponent', () => {
  let component: MuseumDetailsPricesComponent;
  let fixture: ComponentFixture<MuseumDetailsPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumDetailsPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumDetailsPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
