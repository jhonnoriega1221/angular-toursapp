import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailsMapComponent } from './museum-details-map.component';

describe('MuseumDetailsMapComponent', () => {
  let component: MuseumDetailsMapComponent;
  let fixture: ComponentFixture<MuseumDetailsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumDetailsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
