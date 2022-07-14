import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachTopDetailsComponent } from './beach-top-details.component';

describe('BeachTopDetailsComponent', () => {
  let component: BeachTopDetailsComponent;
  let fixture: ComponentFixture<BeachTopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachTopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachTopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
