import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePriceListsButtonsComponent } from './home-price-lists-buttons.component';

describe('HomePriceListsButtonsComponent', () => {
  let component: HomePriceListsButtonsComponent;
  let fixture: ComponentFixture<HomePriceListsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePriceListsButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePriceListsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
