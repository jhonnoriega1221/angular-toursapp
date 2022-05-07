import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportServicePageComponent } from './transport-service-page.component';

describe('TransportServicePageComponent', () => {
  let component: TransportServicePageComponent;
  let fixture: ComponentFixture<TransportServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
