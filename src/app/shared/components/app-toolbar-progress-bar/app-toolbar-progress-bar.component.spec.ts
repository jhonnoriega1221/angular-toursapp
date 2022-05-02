import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolbarProgressBarComponent } from './app-toolbar-progress-bar.component';

describe('AppToolbarProgressBarComponent', () => {
  let component: AppToolbarProgressBarComponent;
  let fixture: ComponentFixture<AppToolbarProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppToolbarProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolbarProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
