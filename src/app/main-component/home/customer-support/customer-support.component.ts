import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FAQService } from '../../../services/faq.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})


export class CustomerSupportComponent implements OnInit {
  userInput: string = '';
  messages: Array<{text: string, sender: string}> = [];

  constructor(private http: HttpClient,private chatbotService:FAQService) {}

  

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.chatbotService.sendMessage(this.userInput).subscribe(
        response => {
          this.messages.push({ text: response.reply, sender: 'bot' });
        }
      );
      this.userInput = '';
    }
  }
  

  ngOnInit(): void {

   
  }

 
}
