import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router ) { }
  private user: UserInterface = {
    email: '',
    password: ''
  }
  ngOnInit() {
  }
  onLogin():void {
    this.authService.loginUser(this.user.email, this.user.password)
    .subscribe( user => {
      const token = user.data.token;
      this.authService.setToken(token);
      this.router.navigate(['/home'])
    }),
    error=>console.log(error);
  }

}
