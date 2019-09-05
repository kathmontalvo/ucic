import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  user:object;

  ngOnInit() {
    this.getUserData();
  }

  onLogOut(){
    this.authService.logOutUser();
    this.router.navigate(['/'])
  }
  getUserData(){
    this.userService.getUser()
    .subscribe((user) => this.user = user)
  }
}
