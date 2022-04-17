import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, AnimationEvent } from '@angular/animations';

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
            animate('0.3s ease-out',
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
            animate('0.3s ease-in',
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

  constructor() { }

  ngOnInit(): void {
    this.hideGreeting();
  }

  hideGreeting() {
    setTimeout( () => {
      this.isShowingGreeting = !this.isShowingGreeting;
    }, 1500 )
  }

  //Los consejos se muestran cuando finaliza la animación de ocultar el saludo
  showTips(event: AnimationEvent) {
    if(event.toState === "void"){
      this.isShowingTips = !this.isShowingTips;
    }
  }

}
