import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
//import { Router } from '@angular/router';
import { Regs } from '../../../models/regModel';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {
  
  userDetails:Regs[] = [];
  constructor(private userService: RegisterService){}
  ngOnInit():void{
    this.userService.getAllUsers().subscribe(data =>{
      this.userDetails=data;
    });
  }
 
}
