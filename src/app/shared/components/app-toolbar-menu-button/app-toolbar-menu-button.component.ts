import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FeedbackDialogService } from 'src/app/feedback/services/feedback-dialog.service';
import { FeedbackDialogComponent } from 'src/app/feedback/components/feedback-dialog/feedback-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-toolbar-menu-button',
  templateUrl: './app-toolbar-menu-button.component.html',
  styleUrls: ['./app-toolbar-menu-button.component.scss']
})
export class AppToolbarMenuButtonComponent implements OnInit {

  public tooltipsList:string[] = [
    'MORE_OPTIONS.TITLE'
  ]

  constructor( public translate:TranslateService, private feedbackDialog:FeedbackDialogService, public dialog: MatDialog) {
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

  private isMobile = this.setIsMobile(window.innerWidth);

  private setIsMobile(innerWidth: number): boolean {
    const isMobile = innerWidth <= 600 ? true : false
    return isMobile;
  }

   openFeedbackDialog(): void {
    this.setIsMobile(window.innerWidth);
    this.dialog.open(FeedbackDialogComponent, {
      width: this.isMobile ? '100vw' : '450px',
      height: this.isMobile ? '100vh' : '80vh',
      maxWidth: this.isMobile ? '100vw' : '450px',
      maxHeight: this.isMobile ? '100vh' : '100vh',
      minHeight: '200px'
    });
  }


}
