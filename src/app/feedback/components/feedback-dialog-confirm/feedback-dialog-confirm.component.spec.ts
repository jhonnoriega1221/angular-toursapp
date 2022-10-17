import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDialogConfirmComponent } from './feedback-dialog-confirm.component';

describe('FeedbackDialogConfirmComponent', () => {
  let component: FeedbackDialogConfirmComponent;
  let fixture: ComponentFixture<FeedbackDialogConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDialogConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
