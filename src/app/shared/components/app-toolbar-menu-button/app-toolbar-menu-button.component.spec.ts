import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolbarMenuButtonComponent } from './app-toolbar-menu-button.component';

describe('AppToolbarMenuButtonComponent', () => {
  let component: AppToolbarMenuButtonComponent;
  let fixture: ComponentFixture<AppToolbarMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppToolbarMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolbarMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
