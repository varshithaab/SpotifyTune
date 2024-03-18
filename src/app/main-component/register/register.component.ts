import { Component,OnInit } from '@angular/core';
import { FormsModule,FormControl,FormGroup ,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { log } from 'console';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Regs } from '../../../../backend/models/reg.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  confirmpass:string='none';
  hide = true;
  allusers:Regs[]=[];
  registrationError: string = '';

constructor(private registrationService: RegisterService,
  private router:Router,
  private snackBar: MatSnackBar
  ){}
ngOnInit():void{
  this.getAllUsers();


}
getAllUsers(){
  this.registrationService.getAllUsers().subscribe(u => {
    this.allusers=u;
    console.log(this.allusers);
  });
  }
  
// navigateToLogin() {
//   // Navigate to the login page
//   this.router.navigate(['/login']);
// }
registerform=new FormGroup({
  firstname:new FormControl("",
  [Validators.required , Validators.minLength(2) , Validators.pattern("[a-zA-z].*")]),
  lastname:new FormControl("" ,
   [Validators.required , Validators.minLength(2) , Validators.pattern("[a-zA-z].*")]),
  email:new FormControl("" , 
  [Validators.required , Validators.email]),

  mobile:new FormControl("" , 
  [Validators.required , Validators.maxLength(10) , Validators.minLength
  (10) , Validators.pattern("[0-9]*")]),
 
  gender:new FormControl("" ,[Validators.required] ),
  pwd:new FormControl("" ,
   [Validators.required , Validators.minLength(6) , Validators.maxLength(16)]),
  cpwd:new FormControl("" , [ Validators.required, this.confirmPasswordValidator.bind(this)]),


});


confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.root.get('pwd')?.value; // Get the value of the password field
  const confirmPassword = control.value; // Get the value of the confirm password field

  if (password !== confirmPassword) {
    return { confirmPassword: true }; // Return an error if passwords don't match
  }

  return null; // Return null if validation passes
}

registersubmitted(){

  console.log(this.registerform.value);
if(this.Password.value !== this. Cpassword.value){
  this.confirmpass = 'inline'; // Show the error message
  return; // Exit the method if passwords don't match
}
this.router.navigate(['/login']);
console.log("Submitted");

const user: Regs = {
  firstname: this.Firstname.value,
  lastname: this.Lastname.value,
  email: this.Email.value,
  mobile: this.Mobile.value,
  gender: this.Gender.value,
  pwd: this.Password.value,
  // isAdmin:!! this.registerform.get('isAdmin')?.value && this.registerform.get('adminCode')?.value === 'yourAdminCode',

};


console.log('Request Payload:', user);

  
  console.log("Data populated in : " + JSON.stringify(user));
  
  // Calling the registration service
  this.registrationService.registerUser(user).subscribe(
    (data:any) => {
      console.log('User registered successfully:', data);

      this.snackBar.open('User registration successful', 'Close', {
        duration: 3000, // Adjust the duration as needed
        panelClass: ['success-snackbar'] // Add custom styles for success snackbar
      });

      

    },
    (error: any) => {
      console.error('Error during registration:', error);
      this.snackBar.open('Registration failed', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  );          

} 

get Firstname(){
  return this.registerform.get("firstname") as FormControl;
}
get Lastname(){
  return this.registerform.get("lastname") as FormControl;
}
get Email(){
  return this.registerform.get("email") as FormControl;
}
get Mobile(){
  return this.registerform.get("mobile") as FormControl;
}
get Gender(){
  return this.registerform.get("gender") as FormControl;
}
get Password(){
  return this.registerform.get("pwd") as FormControl;
}
get Cpassword(){
  return this.registerform.get("cpwd") as FormControl;
}

}
