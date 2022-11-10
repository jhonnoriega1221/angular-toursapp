import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerFeedback } from '../../models/customer-feedback';
import { CustomerFeedbackService } from '../../services/customer-feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

interface Question {
  question:string;
  answer:string;
  name:string;
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  public feedbackForm: FormGroup;
  public isShowingConfirmWrapper: boolean = false;
  public isAcceptPermissions:boolean = false;
  public isLoadingData:boolean = false;
  public isConfirmDialog:boolean = false;
  public confirmMessage:string = '';
  public confirmIcon: string = '';

  private confirmMessageText = {
    message1: '',
    message2: ''
  }

  constructor( 
    private fb:FormBuilder,
    private customerFeedbackService:CustomerFeedbackService,
    private matSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<FeedbackDialogComponent>,
    private translate: TranslateService
  ) {
    this.feedbackForm = this.fb.group({
      question1: new FormControl('', [Validators.required]),
      question2: new FormControl('', [Validators.required]),
      question3: new FormControl('', [Validators.required]),
      question4: new FormControl('', [Validators.required]),
      question5: new FormControl('', [Validators.required]),
      textarea: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.translatePage();
  }

  public questions:Question[] = [
    { name:'question1', question: '¿Le fué util este aplicativo para la consulta de precios de los servicios ofrecidos a turistas?', answer: '0' },
    { name:'question2', question: '¿Que tan satisfecho te encuentras con tu experiencia usando el aplicativo?', answer: '0' },
    { name:'question3', question: '¿Que tan probable es que vuelvas a usar el aplicativo?', answer: '0' },
    { name:'question4', question: '¿Que tan probable es que ecomiendes este aplicativo a otras personas?', answer: '0' },
    { name:'question5', question: '¿Estas de acuerdo que el aplicativo ayuda a mitigar el desconocimiento de precios?', answer: '0' }
  ];

    private translatePage():void {
    this.translate.get("FEEDBACK")
    .subscribe( {
      next: (v) => {
        this.questions[0].question = v.QUESTIONS.QUESTION_1;
        this.questions[1].question = v.QUESTIONS.QUESTION_2;
        this.questions[2].question = v.QUESTIONS.QUESTION_3;
        this.questions[3].question = v.QUESTIONS.QUESTION_4;
        this.questions[4].question = v.QUESTIONS.QUESTION_5;
        this.confirmMessageText = {
          message1: v.CONFIRM.AGREE_TEXT,
          message2: v.CONFIRM.CONFIRM_DIALOG
        }
      }
    })
  }

  public submitFeedbackForm(payload:any):void{

    this.isAcceptPermissions = payload.isAccept;

    if(this.feedbackForm.invalid){
      return;
    }

    if(!this.isAcceptPermissions || payload == null){
      this.isConfirmDialog = false;
      this.confirmMessage = this.confirmMessageText.message1;
      this.confirmIcon = '../../../../assets/location-permission.svg';
      this.isShowingConfirmWrapper = !this.isShowingConfirmWrapper;
      return;
    }

    if(this.isAcceptPermissions){
      this.isLoadingData = true;
      this.isShowingConfirmWrapper = !this.isShowingConfirmWrapper;

      const customerFeedbackJson:CustomerFeedback = {
        "answer1": this.feedbackForm.get('question1')?.value,
        "answer2": this.feedbackForm.get('question2')?.value,
        "answer3": this.feedbackForm.get('question3')?.value,
        "answer4": this.feedbackForm.get('question4')?.value,
        "answer5": this.feedbackForm.get('question5')?.value,
        "textarea": this.feedbackForm.get('textarea')?.value,
        "submitDate": new Date(),
        "location": {
          "lat":payload.location[0]+'',
          "lon":payload.location[1]+''
        }
      }

    this.customerFeedbackService.submitFeedback(customerFeedbackJson)
      .subscribe({
        next: (v) => {
          this.isConfirmDialog = true;
          this.confirmMessage = this.confirmMessageText.message2;
          this.confirmIcon = '../../../../assets/happy-face.svg';
          this.isShowingConfirmWrapper = true
        },
        error: (e) => {
          console.log(e);
          this.isLoadingData = false;
          this.matSnackBar.open('Hubo un error al enviar el mensaje', '', {
            verticalPosition: 'bottom',
            horizontalPosition: 'start',
            duration: 1500,
          });
        },
        complete: () => this.isLoadingData = false
      });
    }



  }

}
