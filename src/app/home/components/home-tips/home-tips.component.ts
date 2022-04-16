import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-tips',
  templateUrl: './home-tips.component.html',
  styleUrls: ['./home-tips.component.scss'],
  animations: [
    trigger (
      'inAnimation',
      [
        transition (
          ':enter',
          [
            style({ opacity: 0}),
            animate('0.1s ease-out',
                      style({ opacity: 1 }))
          ]
        )
      ]
    ),
    trigger (
      'outAnimation',
      [
        transition (
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.2s ease-in',
                    style({ opacity: 0}))
          ],
        )
      ]
    ),
  ]
})
export class HomeTipsComponent implements OnInit {

  public isShowingTips = false;
  public isShowingGreeting = true;
  public isShowingWhiteSpace = false;

  constructor() { }

  ngOnInit(): void {
    this.hideGreeting();
  }

  hideGreeting() {
    setTimeout( () => {
      this.isShowingGreeting = !this.isShowingGreeting;
      this.showTips();
    }, 1500 )
  }

  showTips() {
    setTimeout( () => {
      this.isShowingTips = !this.isShowingTips;
    }, 210 )
  }

}
