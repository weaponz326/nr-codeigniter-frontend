// login form components where user logs into system
// user gets routed to the respective source page after login
// if source is a suite registration, user gets routed to login success to continue with registration

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { LoginApiService } from '../login-api.service';
import { MainNavbarComponent } from 'projects/application/src/app/main-navbar/main-navbar/main-navbar.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [ MainNavbarComponent ]
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginApi: LoginApiService,
    private navbar: MainNavbarComponent
  ) { }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  loginSubmit(){
    this.loginApi.postLogin(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        if (JSON.stringify(res).includes("key")){
          localStorage.setItem('token', res.key);
          // reload main navbar after login
          this.navbar.ngOnInit();

          this.router.navigateByUrl("/login/success");
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  gotoSignup(e){
    e.preventDefault();
    this.router.navigateByUrl("/signup");

    console.log("you are moving to sign up page");
  }

  gotoRecovery(e){
    e.preventDefault();
    this.router.navigateByUrl("/login/recovery");
  }

  ngOnInit(): void {
  }

}
