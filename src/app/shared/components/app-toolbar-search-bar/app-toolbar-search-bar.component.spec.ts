import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolbarSearchBarComponent } from './app-toolbar-search-bar.component';

describe('AppToolbarSearchBarComponent', () => {
  let component: AppToolbarSearchBarComponent;
  let fixture: ComponentFixture<AppToolbarSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppToolbarSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToolbarSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
