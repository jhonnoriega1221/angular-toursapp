import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTitleButtonComponent } from './back-title-button.component';

describe('BackTitleButtonComponent', () => {
  let component: BackTitleButtonComponent;
  let fixture: ComponentFixture<BackTitleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTitleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTitleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
