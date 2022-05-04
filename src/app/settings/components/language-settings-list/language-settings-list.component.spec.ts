import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSettingsListComponent } from './language-settings-list.component';

describe('LanguageSettingsListComponent', () => {
  let component: LanguageSettingsListComponent;
  let fixture: ComponentFixture<LanguageSettingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSettingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
