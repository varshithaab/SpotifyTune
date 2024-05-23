// faq.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FaqItem } from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FAQService {
 
  
  private faqUrl = 'assets/faq-data.json';
  private apiUrl='http://localhost:5000/chatbot'
  constructor(private http: HttpClient) {}

  getFAQ(): Observable<FaqItem[]> {
    return this.http.get<FaqItem[]>(this.faqUrl);
  }
  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { message });
  }

}
