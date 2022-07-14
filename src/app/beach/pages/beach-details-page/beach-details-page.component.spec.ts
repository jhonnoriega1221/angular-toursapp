import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachDetailsPageComponent } from './beach-details-page.component';

describe('BeachDetailsPageComponent', () => {
  let component: BeachDetailsPageComponent;
  let fixture: ComponentFixture<BeachDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
