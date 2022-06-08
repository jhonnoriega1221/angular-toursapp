import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumExhibitionsLineComponent } from './museum-exhibitions-line.component';

describe('MuseumExhibitionsLineComponent', () => {
  let component: MuseumExhibitionsLineComponent;
  let fixture: ComponentFixture<MuseumExhibitionsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumExhibitionsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumExhibitionsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
