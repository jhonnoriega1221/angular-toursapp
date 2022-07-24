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
    { title: 'Conoce los precios', text: 'Consulta el valor de los productos y servicios turisticos', imgURL: '../../../../assets/onboarding1.svg' },
    { title: 'Información actualizada', text: 'Precios que se van actualizando constantemente', imgURL: '../../../../assets/onboarding2.svg' },
    { title: 'Evita cobros excesivos', text: 'Disfruta de tu estadía en la ciudad de Cartagena', imgURL: '../../../../assets/onboarding3.svg' }
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
