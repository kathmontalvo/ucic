import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  comments: Observable<any>;
  user: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService ) { }

  headers : HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.authService.getToken(),
  })

  getAllComments() {
    const url = "https://ti.ucic.pe/api/get/comments";
    return (this.comments = this.http.get(url, {headers: this.headers}));
  }

  getUser() {
    const url = "https://ti.ucic.pe/api/get/user";
    return (this.user = this.http.get(url, {headers: this.headers}));
  }

  saveComment(input: string) {
    //TODO: Obtener TOKEN
    //TODO: not null
    const url = "https://ti.ucic.pe/api/set/comment";
    return this.http.post(url, input, {headers: this.headers})
    .pipe(map(data => data));
  }

}
