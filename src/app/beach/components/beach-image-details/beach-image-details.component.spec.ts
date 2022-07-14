import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachImageDetailsComponent } from './beach-image-details.component';

describe('BeachImageDetailsComponent', () => {
  let component: BeachImageDetailsComponent;
  let fixture: ComponentFixture<BeachImageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachImageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
