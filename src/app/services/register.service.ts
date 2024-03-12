import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regs } from '../../../backend/models/reg.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(private http: HttpClient) { }
  private registrationUrl = 'http://localhost:5000/api/regs';

  getAllUsers(): Observable<Regs[]> {
    return this.http.get<Regs[]>(this.registrationUrl);
  }

  // registerUser(user: any): Observable<any> {
  //   return this.http.post<any>(this.registrationUrl, user);
  // }
  registerUser(user: Regs): Observable<Regs> {
    console.log('User data sent to server:', user);

    console.log("The registration url is  : " + this.registrationUrl);
    //return this.http.post<Regs>(this.registrationUrl + "/adduser", user);
    return this.http.post<Regs>(`${this.registrationUrl}`, user);
  }
  deleteUser(email: string): Observable<any> {
    const deleteUrl = `${this.registrationUrl}/${email}`;
    return this.http.delete<any>(deleteUrl);
  }
  // editUser(email: string, user: Regs): Observable<Regs> {
  //   const editUrl = `${this.registrationUrl}/${email}`;
  //   return this.http.put<Regs>(editUrl, user);
  // }

  // getUserDetails(email: string): Observable<any> {
  //   return this.http.get(`${this.registrationUrl}/outer/${email}`);
  // }

  updateUserDetails(email: string, user: any): Observable<any> {
    return this.http.put(`${this.registrationUrl}/outer/${email}`, user);
  }

  getUserByEmail(email: string): Observable<any> {
    const url = `${this.registrationUrl}/${email}`;
    return this.http.get<any>(url).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error retrieving user:', error);
        throw error;
      })
    );
  }
}
