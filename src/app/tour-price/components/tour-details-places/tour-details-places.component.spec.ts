import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPlacesComponent } from './tour-details-places.component';

describe('TourDetailsPlacesComponent', () => {
  let component: TourDetailsPlacesComponent;
  let fixture: ComponentFixture<TourDetailsPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
