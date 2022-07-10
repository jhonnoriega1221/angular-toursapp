import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFilterButtonComponent } from './toggle-filter-button.component';

describe('ToggleFilterButtonComponent', () => {
  let component: ToggleFilterButtonComponent;
  let fixture: ComponentFixture<ToggleFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFilterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
