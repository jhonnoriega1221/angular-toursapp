import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPriceButtonComponent } from './set-price-button.component';

describe('SetPriceButtonComponent', () => {
  let component: SetPriceButtonComponent;
  let fixture: ComponentFixture<SetPriceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPriceButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPriceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
