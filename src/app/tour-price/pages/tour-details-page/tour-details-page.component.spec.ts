import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPageComponent } from './tour-details-page.component';

describe('TourDetailsPageComponent', () => {
  let component: TourDetailsPageComponent;
  let fixture: ComponentFixture<TourDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
