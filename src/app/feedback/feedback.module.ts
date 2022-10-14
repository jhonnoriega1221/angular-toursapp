import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeedbackDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ]
})
export class FeedbackModule { }
