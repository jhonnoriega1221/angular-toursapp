import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumExhibitionsListComponent } from './museum-exhibitions-list.component';

describe('MuseumExhibitionsListComponent', () => {
  let component: MuseumExhibitionsListComponent;
  let fixture: ComponentFixture<MuseumExhibitionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumExhibitionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumExhibitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
