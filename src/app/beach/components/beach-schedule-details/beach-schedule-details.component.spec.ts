import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachScheduleDetailsComponent } from './beach-schedule-details.component';

describe('BeachScheduleDetailsComponent', () => {
  let component: BeachScheduleDetailsComponent;
  let fixture: ComponentFixture<BeachScheduleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachScheduleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
