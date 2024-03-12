import { Component } from '@angular/core';
import { RegisterService} from '../../../services/register.service';
import { Regs } from '../../../models/regModel';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.css'
})
export class DeleteuserComponent {
  
  userDetails:Regs[] = [];

  constructor(private userService: RegisterService){}

//   ngOnInit():void{
//     this.userService.getAllUsers().subscribe(data =>{
//       this.userDetails=data;
//     });
//   }
 

// deleteUser(email: string): void {
//     this.userService.deleteUser(email).subscribe(
//       response => {
//         console.log('User deleted successfully:', response);
//         // Handle success, if needed
//       },
//       error => {
//         console.error('Error deleting user:', error);
//         // Handle error, if needed
//       }
//     );
//   }
ngOnInit(): void {
  this.loadUserDetails();
}

loadUserDetails(): void {
  // Assuming you have a method in your service to get user details
  this.userService.getAllUsers().subscribe(
    (users) => {
      this.userDetails = users;
    },
    (error) => {
      console.error('Error loading user details:', error);
    }
  );
}

deleteUser(email: string): void {
  this.userService.deleteUser(email).subscribe(
    (response) => {
      console.log('User deleted successfully:', response);
      // Reload user details after successful deletion
      this.loadUserDetails();
    },
    (error) => {
      console.error('Error deleting user:', error);
      // Handle error, if needed
    }
  );
}

}
