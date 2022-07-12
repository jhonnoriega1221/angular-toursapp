import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSeparatorComponent } from './details-separator.component';

describe('DetailsSeparatorComponent', () => {
  let component: DetailsSeparatorComponent;
  let fixture: ComponentFixture<DetailsSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSeparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
