import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarButtonComponent } from './app-navbar-button.component';

describe('AppNavbarButtonComponent', () => {
  let component: AppNavbarButtonComponent;
  let fixture: ComponentFixture<AppNavbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavbarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
