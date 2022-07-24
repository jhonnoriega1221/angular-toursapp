import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-dots',
  templateUrl: './onboarding-dots.component.html',
  styleUrls: ['./onboarding-dots.component.scss']
})
export class OnboardingDotsComponent implements OnInit {

  @Input() actualStep = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
