import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  support = [
    { problem: 'How do I do this?', solution: 'heres how you can solve your issue..', visible: false },
    { problem: 'How do I do This?', solution: 'Heres how you can solve your issue..', visible: false },
    { problem: 'How do I do This?', solution: 'Heres how you can solve your issue..', visible: false },
    { problem: 'How do I do This?', solution: 'Heres how you can solve your issue..', visible: false },
    { problem: 'How do I do This?', solution: 'Heres how you can solve your issue..', visible: false }
  ];
  

  ngOnInit(): void {
    this.support[0].visible = true; // Make the solution for the first support item visible by default
  }

  viewSolution(index: number): void {
    this.support.forEach((item, i) => {
      if (i !== index) {
        item.visible = false; // Hide other solutions
      }
    });
    this.support[index].visible = !this.support[index].visible;
  }
}