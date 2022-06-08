import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumInfoLineComponent } from './museum-info-line.component';

describe('MuseumInfoLineComponent', () => {
  let component: MuseumInfoLineComponent;
  let fixture: ComponentFixture<MuseumInfoLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumInfoLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumInfoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
