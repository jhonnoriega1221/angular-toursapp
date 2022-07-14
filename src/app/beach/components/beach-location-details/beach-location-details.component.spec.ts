import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachLocationDetailsComponent } from './beach-location-details.component';

describe('BeachLocationDetailsComponent', () => {
  let component: BeachLocationDetailsComponent;
  let fixture: ComponentFixture<BeachLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
