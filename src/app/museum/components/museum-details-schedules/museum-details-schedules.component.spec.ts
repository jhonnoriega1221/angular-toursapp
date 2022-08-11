import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailsSchedulesComponent } from './museum-details-schedules.component';

describe('MuseumDetailsSchedulesComponent', () => {
  let component: MuseumDetailsSchedulesComponent;
  let fixture: ComponentFixture<MuseumDetailsSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumDetailsSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumDetailsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
