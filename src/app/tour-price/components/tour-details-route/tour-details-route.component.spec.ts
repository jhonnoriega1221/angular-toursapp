import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsRouteComponent } from './tour-details-route.component';

describe('TourDetailsRouteComponent', () => {
  let component: TourDetailsRouteComponent;
  let fixture: ComponentFixture<TourDetailsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
