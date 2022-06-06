import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumListItemComponent } from './museum-list-item.component';

describe('MuseumListItemComponent', () => {
  let component: MuseumListItemComponent;
  let fixture: ComponentFixture<MuseumListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
