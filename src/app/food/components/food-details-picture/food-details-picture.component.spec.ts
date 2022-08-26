import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsPictureComponent } from './food-details-picture.component';

describe('FoodDetailsPictureComponent', () => {
  let component: FoodDetailsPictureComponent;
  let fixture: ComponentFixture<FoodDetailsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetailsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
