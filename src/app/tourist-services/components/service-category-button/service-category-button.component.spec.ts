import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryButtonComponent } from './service-category-button.component';

describe('ServiceCategoryButtonComponent', () => {
  let component: ServiceCategoryButtonComponent;
  let fixture: ComponentFixture<ServiceCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
