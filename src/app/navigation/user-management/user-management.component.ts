import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { Regs } from '../../models/regModel';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  // toView:boolean=false;
  // userDetails:Regs[] = [];
  // constructor(private userService: RegisterService , private router:Router){}
  // ngOnInit():void{
  //   this.userService.getAllUsers().subscribe(data =>{
  //     this.userDetails=data;
  //   });
 // }
  // onClick(){
  // this.toView=!this.toView;
  // // this.router.navigate(['/viewuser']);
  // }
}
