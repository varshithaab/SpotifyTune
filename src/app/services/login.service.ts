import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private adminLogin=new BehaviorSubject<boolean>(false);
  currentMessage=this.adminLogin.asObservable();
  private apiUrl = 'http://localhost:5000/api/login'; 
  //priavte apiUrl='/api/login';

  constructor(private http: HttpClient) { }
  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
  onAdminLogin(message:boolean){
    console.log("Sharanya",message);
    this.adminLogin.next(message);
  }
}
