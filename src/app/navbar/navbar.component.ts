import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged = false;
  userDetail = null;
  constructor(private loginSer: LoginService, public router: Router) { }

  ngOnInit(): void {
    this.logged = this.loginSer.loggedUser;
    this.userDetail = this.loginSer.userDetail;
    this.loginSer.getLoggedEvent.subscribe(() => {
      this.logged = this.loginSer.loggedUser;
      this.userDetail = this.loginSer.userDetail;

    })
  }
  logout() {
    this.loginSer.logout();
  }
  // login() {
  //   this.loginSer.loggedIn({ id: 'id', email: 'som@gg', token: "asdhgasas6d5asd" });
  // }

}
