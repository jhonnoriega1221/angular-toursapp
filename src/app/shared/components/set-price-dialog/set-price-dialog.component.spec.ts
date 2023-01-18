import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPriceDialogComponent } from './set-price-dialog.component';

describe('SetPriceDialogComponent', () => {
  let component: SetPriceDialogComponent;
  let fixture: ComponentFixture<SetPriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPriceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
