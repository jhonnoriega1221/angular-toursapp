import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachListItemComponent } from './beach-list-item.component';

describe('BeachListItemComponent', () => {
  let component: BeachListItemComponent;
  let fixture: ComponentFixture<BeachListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
