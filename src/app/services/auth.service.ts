import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from 'src/app/models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  })

  loginUser(email: string, password: string): Observable<any> {
    const url = "https://ti.ucic.pe/api/login";
    return this.http
      .post<UserInterface>(url, { email: email, password: password }, { headers: this.headers })
      .pipe(map(data => {
        console.log(data)
        return data
      }))
  }

  setUser(user: UserInterface): void {
    let user_str = JSON.stringify(user);
    localStorage.setItem('currentUser', user_str)
  }

  setToken(token): void {
    localStorage.setItem('token', token)
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logOutUser(): void {
    localStorage.removeItem('token')
  }
}
