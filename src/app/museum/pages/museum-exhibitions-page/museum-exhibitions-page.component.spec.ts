import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumExhibitionsPageComponent } from './museum-exhibitions-page.component';

describe('MuseumExhibitionsPageComponent', () => {
  let component: MuseumExhibitionsPageComponent;
  let fixture: ComponentFixture<MuseumExhibitionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumExhibitionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumExhibitionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
