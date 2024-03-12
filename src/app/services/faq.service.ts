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

  constructor(private http: HttpClient) {}

  getFAQ(): Observable<FaqItem[]> {
    return this.http.get<FaqItem[]>(this.faqUrl);
  }
}
