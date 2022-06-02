import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxiPriceCalculatorService {

  public originPlaceName = '';
  public destinationPlaceName = '';

  constructor() { }

  public setOriginPlace(name:string){
    this.originPlaceName = name;
  }

  public setDestinationPlace(name:string){
    this.destinationPlaceName = name;
  }

  public getOriginPlace(){
    return this.originPlaceName;
  }

  public getDestinationPlace(){
    return this.destinationPlaceName;
  }
}
