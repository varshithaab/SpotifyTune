import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Premium } from '../models/premiumModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:5000/api/subscribe'
  constructor(private http : HttpClient) { }
  
  submitPayment(data : Premium): Observable<Premium>{
    return this.http.post<Premium>(this.apiUrl, data);
  }

  getUserData(): Observable<Premium> {
    return this.http.get<Premium>(`${this.apiUrl}/latest`);
  }
  
}
