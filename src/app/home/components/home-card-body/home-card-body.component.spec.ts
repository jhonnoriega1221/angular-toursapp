import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardBodyComponent } from './home-card-body.component';

describe('HomeCardBodyComponent', () => {
  let component: HomeCardBodyComponent;
  let fixture: ComponentFixture<HomeCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
