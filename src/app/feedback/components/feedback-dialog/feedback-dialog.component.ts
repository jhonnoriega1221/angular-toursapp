import { Component, OnInit } from '@angular/core';

interface Question {
  question:string;
  answer:string
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public questions:Question[] = [
    { question: '¿Le fué util este aplicativo para la consulta de precios de los servicios ofrecidos a turistas?', answer: '0' },
    { question: '¿Que tan satisfecho te encuentras con tu experiencia usando el aplicativo?', answer: '0' },
    { question: '¿Que tan probable es que vuelvas a usar el aplicativo?', answer: '0' },
    { question: '¿Que tan probable es que ecomiendes este aplicativo a otras personas?', answer: '0' },
    { question: '¿Estas de acuerdo que el aplicativo ayuda a mitigar el desconocimiento de precios?', answer: '0' }
  ]

}
