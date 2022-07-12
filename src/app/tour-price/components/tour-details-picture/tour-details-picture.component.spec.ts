import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPictureComponent } from './tour-details-picture.component';

describe('TourDetailsPictureComponent', () => {
  let component: TourDetailsPictureComponent;
  let fixture: ComponentFixture<TourDetailsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
