import { Component } from '@angular/core';
import { FAQService } from '../../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: any[] = [];

  constructor(private faqService: FAQService) { }

  ngOnInit(): void {
    this.faqService.getFAQs().subscribe(faqs => {
      this.faqs = faqs;
    });
  }
}
