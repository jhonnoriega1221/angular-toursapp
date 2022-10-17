import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,  } from 'rxjs';
import { CustomerFeedback } from '../models/customer-feedback';

@Injectable({
  providedIn: 'root'
})
export class CustomerFeedbackService {

  constructor( private http:HttpClient ) { }
  apiURL: String = environment.apiURL;

  public submitFeedback(customerFeedbackData:CustomerFeedback):Observable <CustomerFeedback>{
    return this.http.post<CustomerFeedback>(`${this.apiURL}customer-feedback`, customerFeedbackData);
  }
}
