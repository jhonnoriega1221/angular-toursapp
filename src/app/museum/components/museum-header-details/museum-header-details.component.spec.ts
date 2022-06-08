import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumHeaderDetailsComponent } from './museum-header-details.component';

describe('MuseumHeaderDetailsComponent', () => {
  let component: MuseumHeaderDetailsComponent;
  let fixture: ComponentFixture<MuseumHeaderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumHeaderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumHeaderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
