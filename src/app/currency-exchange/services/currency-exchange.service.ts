import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyConversionApiResponse } from '../models/currency-conversion-api-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) {}
  url: String = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

  getCurrencyExchange(from: String): Observable<CurrencyConversionApiResponse> {
    return this.http.get<CurrencyConversionApiResponse>(`${this.url}${from}/cop.min.json`);
  }

}
