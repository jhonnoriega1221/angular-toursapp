import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDotsComponent } from './onboarding-dots.component';

describe('OnboardingDotsComponent', () => {
  let component: OnboardingDotsComponent;
  let fixture: ComponentFixture<OnboardingDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingDotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
