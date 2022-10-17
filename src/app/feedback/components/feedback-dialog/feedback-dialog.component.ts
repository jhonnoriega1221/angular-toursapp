import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerFeedback } from '../../models/customer-feedback';
import { CustomerFeedbackService } from '../../services/customer-feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor( 
    private fb:FormBuilder,
    private customerFeedbackService:CustomerFeedbackService,
    private matSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<FeedbackDialogComponent>
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

  }

  public questions:Question[] = [
    { name:'question1', question: '¿Le fué util este aplicativo para la consulta de precios de los servicios ofrecidos a turistas?', answer: '0' },
    { name:'question2', question: '¿Que tan satisfecho te encuentras con tu experiencia usando el aplicativo?', answer: '0' },
    { name:'question3', question: '¿Que tan probable es que vuelvas a usar el aplicativo?', answer: '0' },
    { name:'question4', question: '¿Que tan probable es que ecomiendes este aplicativo a otras personas?', answer: '0' },
    { name:'question5', question: '¿Estas de acuerdo que el aplicativo ayuda a mitigar el desconocimiento de precios?', answer: '0' }
  ];

  public submitFeedbackForm(payload:any):void{

    this.isAcceptPermissions = payload.isAccept;

    if(this.feedbackForm.invalid){
      return;
    }

    if(!this.isAcceptPermissions || payload == null){
      this.isConfirmDialog = false;
      this.confirmMessage = 'Al enviar el mensaje daria su consentimiento para compartir su ubicación actual.';
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
          this.confirmMessage = 'Muchas gracias por dar tu opinión, estos comentarios ayudarán a seguir mejorando.';
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
