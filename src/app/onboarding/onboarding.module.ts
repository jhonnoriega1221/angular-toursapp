import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingPageComponent } from './pages/onboarding-page/onboarding-page.component';
import { OnboardingItemComponent } from './components/onboarding-item/onboarding-item.component';
import { SwiperModule } from 'swiper/angular';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { OnboardingDotsComponent } from './components/onboarding-dots/onboarding-dots.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OnboardingPageComponent,
    OnboardingItemComponent,
    OnboardingDotsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    OnboardingRoutingModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class OnboardingModule { }
