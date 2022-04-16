import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTipsComponent } from './home-tips.component';

describe('HomeTipsComponent', () => {
  let component: HomeTipsComponent;
  let fixture: ComponentFixture<HomeTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
