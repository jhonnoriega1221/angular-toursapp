import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingItemComponent } from './onboarding-item.component';

describe('OnboardingItemComponent', () => {
  let component: OnboardingItemComponent;
  let fixture: ComponentFixture<OnboardingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
