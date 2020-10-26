// user gets routed here first before automatically being rerouted to continue

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';


@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css'],
  providers: [ MainNavbarApiService ]
})
export class LoginSuccessComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  name: any;
  redirectionMsg: any;

  ngOnInit(): void {
    this.navbarApi.getUser()
      .subscribe(
        res => {
          this.name = res.name;
          console.log(res.name);
        },
        err => {
          console.log(err);
        }
      )

    // autoatically redirect right after login
    this.router.navigateByUrl("/");
  }

}
