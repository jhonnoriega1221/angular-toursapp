import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailsPageComponent } from './museum-details-page.component';

describe('MuseumDetailsPageComponent', () => {
  let component: MuseumDetailsPageComponent;
  let fixture: ComponentFixture<MuseumDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
