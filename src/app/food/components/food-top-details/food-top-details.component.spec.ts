import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTopDetailsComponent } from './food-top-details.component';

describe('FoodTopDetailsComponent', () => {
  let component: FoodTopDetailsComponent;
  let fixture: ComponentFixture<FoodTopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
