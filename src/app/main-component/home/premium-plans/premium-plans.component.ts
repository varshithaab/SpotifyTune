import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-premium-plans',
  templateUrl: './premium-plans.component.html',
  styleUrl: './premium-plans.component.css'
})
export class PremiumPlansComponent {
  showForm : boolean = false;
  showPaymentForm(button : string){
    this.showForm = true;
  }
  @ViewChild('bottomElement')
  bottomElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  scrollToBottom() {
    const bottomPosition = this.bottomElement.nativeElement.offsetTop;
    window.scrollTo({ top: bottomPosition, behavior: 'smooth' });
  }
  scrollUp() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
   

}
