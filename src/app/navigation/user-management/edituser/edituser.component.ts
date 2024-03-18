import { Component, Input } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { Regs } from '../../../models/regModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {
  // constructor(private registrationService : RegisterService){}

  // editUser(email: string, updatedUser: Regs): void {
  //   this.registrationService.editUser(email, updatedUser).subscribe(
  //     (data) => {
  //       console.log('User updated successfully:', data);
  //       // Handle success scenarios or update your UI accordingly
  //     },
  //     (error) => {
  //       console.error('Error during user update:', error);
  //       // Handle error scenarios or show error messages
  //     }
  //   );
  // }

  // @Input() user!: Regs;

  // updatedUser: Regs = {
  //   email: '',
  //   firstname: '',
  //   gender: '',
  //   lastname: '',
  //   mobile: '',
  //   pwd: '',
  //   isAdmin: false
  // };

  // constructor(private registrationService: RegisterService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // Set the initial values for updatedUser
  //   this.updatedUser.email = this.route.snapshot.paramMap.get('email') || ('');
  //   this.updatedUser.firstname = this.user.firstname;
  //   this.updatedUser.lastname = this.user.lastname;
  //   this.updatedUser.mobile = this.user.mobile;
  // }

  // editUser(): void {
  //   this.registrationService.editUser(this.updatedUser.email, this.updatedUser).subscribe(
  //     (data) => {
  //       console.log('User updated successfully:', data);
  //       // Handle success scenarios or update your UI accordingly
  //     },
  //     (error) => {
  //       console.error('Error during user update:', error);
  //       // Handle error scenarios or show error messages
  //     }
  //   );
  // }
  email: string = '';
  userDetails: any = {};
  updatedDetails: any = {};
  userEmail: string = '';
  constructor(private userService: RegisterService) {}

  getUserByEmail() {
    this.userService.getUserByEmail(this.userEmail).subscribe(
      (response) => {
        // Successful response
        console.log('User details:', response);
        this.userDetails = response.user;  // Update userDetails variable with the retrieved user details
        // You can perform further actions with the userDetails data here
      },
      (error) => {
        // Error handling
        console.error('Error retrieving user:', error);
        // You can handle the error, show a message, or perform other actions here
      }
    );
  }

  updateUserDetails() {
    this.userService.updateUserDetails(this.email, this.updatedDetails).subscribe(
      (response) => {
        if (response && response.updatedUser) {
          console.log('User updated successfully:', response);
        } else {
          console.log('User not found');
        }
      },
      // (error) => {
      //   console.error('Error updating user details:', error);
      // }
    );
  }

}
