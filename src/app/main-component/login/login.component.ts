import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
    showInvalidCredentialsMessage: boolean = false;

//showAdminPage:boolean=false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.onAdminLogin(false);
  if(this.loginForm.value.email === 'ssharanya33@gmail.com'&& this.loginForm.value.password==='sharanya'){
  // this.showAdminPage=true;
  this.loginService.onAdminLogin(true);
  }
      // Call the login service to authenticate the user
      this.loginService.loginUser({ email, password }).subscribe(
        (data) => {
          // Successful login, handle accordingly
          console.log(data.message);
          this.loginService.isLogged(true);

          this.router.navigate(['/home']); // Navigate to the dashboard or another page
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
          this.showInvalidCredentialsMessage = true;
        }
      );
    }
  }
  
}
