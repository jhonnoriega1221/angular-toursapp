import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-menu-button',
  templateUrl: './app-toolbar-menu-button.component.html',
  styleUrls: ['./app-toolbar-menu-button.component.scss']
})
export class AppToolbarMenuButtonComponent implements OnInit {

  public tooltipsList:string[] = [
    'MORE_OPTIONS.TITLE'
  ]

  constructor( public translate:TranslateService) {
    translate.get("TOOLBAR")
    .subscribe({
      next: (v) => {
        this.tooltipsList[0] = v.MORE_OPTIONS.TITLE;
      }
    })
  }

  @Output() openFeedback: EventEmitter < any > = new EventEmitter();

  ngOnInit(): void {
  }

  public openFeedbackDialog():void {
    this.openFeedback.emit();
  }

}
