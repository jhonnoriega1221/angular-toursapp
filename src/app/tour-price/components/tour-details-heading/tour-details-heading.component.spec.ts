import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsHeadingComponent } from './tour-details-heading.component';

describe('TourDetailsHeadingComponent', () => {
  let component: TourDetailsHeadingComponent;
  let fixture: ComponentFixture<TourDetailsHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
