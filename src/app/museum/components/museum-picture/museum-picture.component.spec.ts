import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumPictureComponent } from './museum-picture.component';

describe('MuseumPictureComponent', () => {
  let component: MuseumPictureComponent;
  let fixture: ComponentFixture<MuseumPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
