import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hasLoggedUser: boolean = false;

  constructor(
    private loginService: LoginService
  ) {}
ngOnInit(){
  this.loginService.currentMessage1.subscribe(isLogged => this.hasLoggedUser = isLogged);
}
}
