// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { BehaviorSubject, Observable } from 'rxjs';


// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class LoginService {
// //   private adminLogin=new BehaviorSubject<boolean>(false);
// //   currentMessage=this.adminLogin.asObservable();
// //   private hasLogin=new BehaviorSubject<boolean>(false);
// //   currentMessage1=this.hasLogin.asObservable();
// //   private apiUrl = 'http://localhost:5000/api/login'; 
// //   //priavte apiUrl='/api/login';

// //   constructor(private http: HttpClient) { }
// //   loginUser(credentials: { email: string; password: string }): Observable<any> {
// //     return this.http.post<any>(this.apiUrl, credentials);
// //   }
// //   onAdminLogin(message:boolean){
// //     console.log("Sharanya",message);
// //     this.adminLogin.next(message);
// //   }
// //   isLogged(message:boolean){
// //     console.log("paaaaa",message);
// //     this.hasLogin.next(message);
// //   }
// // }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private adminLogin = new BehaviorSubject<boolean>(false);
//   currentMessage = this.adminLogin.asObservable();

//   private hasLogin = new BehaviorSubject<boolean>(false);
//   currentMessage1 = this.hasLogin.asObservable();

//   private username = new BehaviorSubject<string>('');
//   currentUsername = this.username.asObservable();

//   private apiUrl = 'http://localhost:5000/api/login';

//   constructor(private http: HttpClient) { }

//   loginUser(credentials: { email: string; password: string }): Observable<any> {
//     return this.http.post<any>(this.apiUrl, credentials);
//   }

//   onAdminLogin(message: boolean) {
//     // console.log("Sharanya", message);
//     this.adminLogin.next(message);
//   }

//   isLogged(message: boolean) {
//   // console.log("paaaaa", message);
//     this.hasLogin.next(message);
//   }

//   setUsername(name: string) {
//     this.username.next(name);
//   }

//   getUsername(): string {
//     return this.username.getValue();
//   }

//   logout() {
//     this.hasLogin.next(false);
//     this.adminLogin.next(false);
//     this.username.next('');
//     // Additional logic for logging out, e.g., clearing tokens, can be added here
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private adminLogin = new BehaviorSubject<boolean>(false);
  currentMessage = this.adminLogin.asObservable();
  private hasLogin = new BehaviorSubject<boolean>(false);
  currentMessage1 = this.hasLogin.asObservable();
  private usernameSubject = new BehaviorSubject<string>('');
  currentUsername = this.usernameSubject.asObservable();

  private apiUrl = 'http://localhost:5000/api/login';

  constructor(private http: HttpClient,private router : Router) { }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  onAdminLogin(message: boolean): void {
    this.adminLogin.next(message);
  }

  isLogged(message: boolean): void {
    this.hasLogin.next(message);
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  getUsername(): string {
    return this.usernameSubject.getValue();
  }

  logout(): void {
    // Clear any stored user data, such as tokens or user information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  
    // Reset any session-related data
    sessionStorage.clear();
  
    // Notify other components or services about the logout event if needed
    this.onAdminLogin(false); // Assuming you use adminLogin for tracking login status
  
    // Redirect to the login page or any other appropriate page after logout
    this.router.navigate(['/login']);
  }
  
}
