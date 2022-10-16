import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor( private fb:FormBuilder) {
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

  public submitFeedbackForm():void{
    if(this.feedbackForm.invalid){
      return;
    }

    
  }

}
