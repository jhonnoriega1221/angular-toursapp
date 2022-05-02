import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  animations: [
    trigger('toggleLoadingBar', [
      state('visible', style({
        'opacity': 1,
      })),
      state('invisible', style({
        'opacity': 0,
      })),
      transition('invisible => visible', animate(200)),
      transition('visible => invisible', animate(500))
    ])
  ]
})
export class AppLayoutComponent implements OnInit {

  public isLoading: boolean = false;
  public loadingBarValue: number = 0;
  public loadingBarState: string = 'invisible';

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
        this.startLoadingBar();

        setInterval( () => {
          this.loadingBarIncrease();
        }, 1900 )

      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
        this.finishLoadingBar();
      }
    })
  }

  private startLoadingBar() {
    this.loadingBarState = 'visible';
    this.loadingBarValue = 5;
  }

  private finishLoadingBar() {
    this.loadingBarState = 'invisible';
    this.loadingBarValue = 100;
  }

  private loadingBarIncrease() {
    if(this.loadingBarValue < 95)
      this.loadingBarValue += 5;
  }

  ngOnInit(): void {
  }

}
