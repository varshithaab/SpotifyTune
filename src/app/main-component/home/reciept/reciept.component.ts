
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrl: './reciept.component.css'
})
export class RecieptComponent {

  recentData: any;
  currentDate: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recentData = history.state.data; // Assuming data is passed via state
    this.currentDate = new Date().toLocaleDateString();
  }
}
