import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Slide {
  title:string;
  text:string;
  imgURL:string;
}

@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss']
})
export class OnboardingPageComponent implements OnInit {
  public actualSlide: number = 0;
  public nextButtonText:string = 'Siguiente';
  public isLastSlide:boolean = false;
  public slides:Slide[] = [
    { title: 'Revisa los precios', text: 'Antes de consumir un producto o servicio, observa su precio en la aplicación', imgURL: '../../../../assets/taxi-calculator.svg' },
    { title: 'Revisa los precioas', text: 'Sexo', imgURL: '../../../../assets/taxi-calculator.svg' },
    { title: 'Revisa los precioes', text: 'Motelea con las putas mas baratas del centro', imgURL: '../../../../assets/taxi-calculator.svg' }
  ];

  constructor( private routerService:Router) { }

  ngOnInit(): void {
  }

  nextSlide(){
    this.actualSlide++;
    this.setLastSlide(this.actualSlide);
    if(this.isLastSlide){
      this.nextButtonText = 'Continuar'
    }
    if(this.actualSlide === 3){
      this.routerService.navigate(['/']);
      
    }
  }

  skipOnboarding(){
    this.routerService.navigate(['/']);
  }

  setLastSlide(index:number){
    this.isLastSlide = index === 2 ? true : false;
  }

}
