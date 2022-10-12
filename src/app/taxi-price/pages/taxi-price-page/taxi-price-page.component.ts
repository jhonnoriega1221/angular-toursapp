import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TaxiPriceCalculatorService } from '../../services/taxi-price-calculator.service';

interface inputParameters {
  place: string,
  isOrigin? : boolean,
  latlon :{
    lat:string,
    lon:string
  }
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
  public latLonSearch = {lat: '0', lon: '0'};

  public originPlace = '';
  public destinationPlace = '';
  public taxiPrice = '';

  public setPlace(parameters: inputParameters) {
    if (parameters.place === 'marker' || parameters.place === 'cancel' || parameters.place === 'search') {
      this.getNeighborhood('none');
      this.isSelectMode = !this.isSelectMode;
      this.isOriginMarker = parameters.isOrigin;
      this.latLonSearch = {lat: '0', lon: '0'}
      if(parameters.place === 'search') {
        this.latLonSearch = parameters.latlon;
      }
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

  public cancelPlace(){
    this.getNeighborhood('none');
    this.isSelectMode = !this.isSelectMode;
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

  constructor( private translate:TranslateService, private taxiPriceCalculator:TaxiPriceCalculatorService ) {}

  ngOnInit(): void {
    this.translatePage();
    this.locationName = this.nothingText;
  }

  public getNeighborhood(name: any) {
    this.isAcceptButtonDisabled = name === 'none' ? true : false;
    this.locationName = name === 'none' ? this.nothingText : name;
  }

  public getTaxiPrice(origin:string, destination:string){
    const taxiPrice = this.taxiPriceCalculator.calculatePrice(origin, destination);
    this.taxiPrice = taxiPrice === '' ? 'null' : taxiPrice;
  }

  public acceptPlace() {
    this.isAcceptButtonDisabled = true;
    this.setPlace({
      place: this.locationName,
      isOrigin: this.isOriginMarker,
      latlon: {lat: '', lon: ''}
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
