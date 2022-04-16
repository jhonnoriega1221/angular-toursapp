import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePriceListsButtonComponent } from './home-price-lists-button.component';

describe('HomePriceListsButtonComponent', () => {
  let component: HomePriceListsButtonComponent;
  let fixture: ComponentFixture<HomePriceListsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePriceListsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePriceListsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
