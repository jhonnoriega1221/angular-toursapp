import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-item',
  templateUrl: './onboarding-item.component.html',
  styleUrls: ['./onboarding-item.component.scss']
})
export class OnboardingItemComponent implements OnInit {

  @Input() title:string = '';
  @Input() text:string = '';
  @Input() imgURL:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
