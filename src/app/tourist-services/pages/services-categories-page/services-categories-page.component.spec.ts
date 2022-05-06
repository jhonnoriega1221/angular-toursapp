import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCategoriesPageComponent } from './services-categories-page.component';

describe('ServicesCategoriesPageComponent', () => {
  let component: ServicesCategoriesPageComponent;
  let fixture: ComponentFixture<ServicesCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
