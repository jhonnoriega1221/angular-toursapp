import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsPageComponent } from './food-details-page.component';

describe('FoodDetailsPageComponent', () => {
  let component: FoodDetailsPageComponent;
  let fixture: ComponentFixture<FoodDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
