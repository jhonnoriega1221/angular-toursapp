import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; ''

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
  private continueButtonText:string = "Continuar"
  public isLastSlide:boolean = false;
  public slides:Slide[] = [
    { title: 'Conoce los precios', text: 'Consulta el valor de los productos y servicios turisticos', imgURL: '../../../../assets/onboarding1.svg' },
    { title: 'Información actualizada', text: 'Precios que se van actualizando constantemente', imgURL: '../../../../assets/onboarding2.svg' },
    { title: 'Evita cobros excesivos', text: 'Disfruta de tu estadía en la ciudad de Cartagena', imgURL: '../../../../assets/onboarding3.svg' }
  ];

  constructor( private routerService:Router, private translate:TranslateService) { }

  ngOnInit(): void {
    this.translatePage();
  }

  nextSlide(){
    this.actualSlide++;
    this.setLastSlide(this.actualSlide);
    if(this.isLastSlide){
      this.nextButtonText = this.continueButtonText;
    }
    if(this.actualSlide > 2){
      localStorage.setItem('ft', 'false');
      this.routerService.navigate(['/']);
      
    }
    console.log(this.actualSlide)
  }

  skipOnboarding(){
    localStorage.setItem('ft', 'false');
    this.routerService.navigate(['/']);
  }

  setLastSlide(index:number){
    this.isLastSlide = index === 2 ? true : false;
  }

  translatePage():void {
    this.translate.get("ONBOARDING").subscribe( {
      next: (v) => {
        this.slides[0].title = v.SLIDE1_TITLE;
        this.slides[0].text = v.SLIDE1_TEXT;
        this.slides[1].title = v.SLIDE2_TITLE;
        this.slides[1].text = v.SLIDE2_TEXT;
        this.slides[2].title = v.SLIDE3_TITLE;
        this.slides[2].text = v.SLIDE3_TEXT;
      }
     
    });
    this.translate.get("MISC").subscribe( {
      next: (v) => {
        this.nextButtonText = v.NEXT_ACTION_TEXT;
        this.continueButtonText = v.CONTINUE_ACTION_TEXT;
      }
     
    })
  }

}
