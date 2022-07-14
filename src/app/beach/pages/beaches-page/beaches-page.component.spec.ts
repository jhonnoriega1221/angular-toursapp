import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachesPageComponent } from './beaches-page.component';

describe('BeachesPageComponent', () => {
  let component: BeachesPageComponent;
  let fixture: ComponentFixture<BeachesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeachesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
