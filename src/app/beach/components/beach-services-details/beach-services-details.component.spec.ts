import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachServicesDetailsComponent } from './beach-services-details.component';

describe('BeachServicesDetailsComponent', () => {
  let component: BeachServicesDetailsComponent;
  let fixture: ComponentFixture<BeachServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachServicesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
