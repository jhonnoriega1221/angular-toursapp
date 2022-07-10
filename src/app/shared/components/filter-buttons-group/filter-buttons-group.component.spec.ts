import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonsGroupComponent } from './filter-buttons-group.component';

describe('FilterButtonsGroupComponent', () => {
  let component: FilterButtonsGroupComponent;
  let fixture: ComponentFixture<FilterButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterButtonsGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
