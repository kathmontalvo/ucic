import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) { }
  headers : HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.authService.getToken(),
  })
  getUser() {
    const url = "https://ti.ucic.pe/api/get/user";
    return (this.user = this.http.get(url, {headers: this.headers}));
  }
}
