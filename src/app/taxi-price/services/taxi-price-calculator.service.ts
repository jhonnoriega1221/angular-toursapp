import { Injectable } from '@angular/core';
import TaxiPrices from '../data/taxi_prices.json'

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

  public calculatePrice(originPlace:string, destinationPlace:string){
    const taxiPrices:any[] = TaxiPrices;

    for(let i = 0; i < taxiPrices.length; i++){
      if(originPlace.toUpperCase() === taxiPrices[i].place.toUpperCase()){

        for(let j = 0; j < Object.keys(taxiPrices[i]).length; j++){
          if(destinationPlace.toUpperCase() === Object.keys(taxiPrices[i])[j].toUpperCase()){

            const destination = Object.keys(taxiPrices[i])[j];
            return taxiPrices[i][destination];
          }
        }
      }
    }
    return 'null';
  }
}
