import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyConversionApiResponse } from '../models/currency-conversion-api-response';
import Currencies from '../data/currencies.json';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) {}
  url: String = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

  getCurrencyExchange(from: String): Observable<CurrencyConversionApiResponse> {
    return this.http.get<CurrencyConversionApiResponse>(`${this.url}${from}/cop.min.json`);
  }

  currenciesName(): Currency[]{
    const currenciesArray:Currency[] = Currencies;
    /*for(let i = 0; i < currenciesArray.length; i++){
      currencies.push({
        'abreviation': currenciesArray[i][0],
        'name': currenciesArray[i][1]
      });
    }*/
    return currenciesArray;
  }

}
