import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface inputParameters {
  place: string,
    isOrigin ? : boolean
}

@Component({
  selector: 'taxi-price-service-page',
  templateUrl: './taxi-price-page.component.html',
  styleUrls: ['./taxi-price-page.component.scss']
})



export class TaxiPricePageComponent implements OnInit {

  private nothingText:string = '';

  public pageTitle:string = '';
  public isSelectMode: boolean = false;
  public isMobile: boolean = this.setIsMobile(window.innerWidth);
  public isAcceptButtonDisabled: boolean = true;
  public isCalculatingPrice:boolean = false;
  public locationName: string = '';
  public isOriginMarker ? : boolean;

  public originPlace = '';
  public destinationPlace = '';

  public setPlace(parameters: inputParameters) {
    if (parameters.place === 'marker' || parameters.place === 'cancel') {
      this.getNeighborhood('none');
      this.isSelectMode = !this.isSelectMode;
      this.isOriginMarker = parameters.isOrigin;
    } else {
      if (parameters.isOrigin) {
        this.originPlace = parameters.place;
      } else {
        this.destinationPlace = parameters.place;
      }

      if(this.originPlace !== '' && this.destinationPlace !== ''){
        this.isCalculatingPrice = true;
        this.getTaxiPrice(this.originPlace, this.destinationPlace);
      }
    }
  }

  //Detecta cada vez que se cambia el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const innerWidth: number = event.target.innerWidth;
    this.isMobile = this.setIsMobile(innerWidth);
  }

  private setIsMobile(innerWidth: number): boolean {
    const isMobile = innerWidth <= 600 ? true : false
    return isMobile;
  }

  constructor( private translate:TranslateService ) {}

  ngOnInit(): void {
    this.translatePage();
    this.locationName = this.nothingText;
  }

  public getNeighborhood(name: any) {
    this.isAcceptButtonDisabled = name === 'none' ? true : false;
    this.locationName = name === 'none' ? this.nothingText : name;
  }

  public getTaxiPrice(origin:string, destination:string){
    console.log('CALCULAR!!')
  }

  public acceptPlace() {
    this.isAcceptButtonDisabled = true;
    this.setPlace({
      place: this.locationName,
      isOrigin: this.isOriginMarker
    });
    this.isSelectMode = !this.isSelectMode;
  }

  private translatePage():void{
    this.translate.get("TOURIST_SERVICES.TRANSPORT")
    .subscribe( { 
      next: (v) => {
        this.pageTitle = v.TITLE;
        this.nothingText = v.NOTHING_SELECTED_TEXT;
      }    
    })
  }

}
