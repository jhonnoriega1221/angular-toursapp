import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMarkerComponent } from './click-marker.component';

describe('ClickMarkerComponent', () => {
  let component: ClickMarkerComponent;
  let fixture: ComponentFixture<ClickMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
