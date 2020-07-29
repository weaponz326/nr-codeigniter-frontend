// account step of signup proccess
// user is routed to signup success upon successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { SignupApiService } from '../signup-api.service';
import { MainNavbarComponent } from 'projects/application/src/app/main-navbar/main-navbar/main-navbar.component';


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
  providers: [ MainNavbarComponent ]
})
export class AccountFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupApi: SignupApiService,
    private navbar: MainNavbarComponent
  ) { }

  accountForm = this.fb.group({
    email: ["", Validators.required],
    password1: ["", Validators.required],
    password2: ["", Validators.required]
  })

  accountSubmit(){
    this.signupApi.postAccount(this.accountForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (JSON.stringify(res).includes("key")){
            localStorage.setItem('token', res.key);
            // reload main navbar after signing up
            this.navbar.ngOnInit();

            this.router.navigateByUrl("/signup/await");
          }
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.accountForm.value);
  }

  gotoProfile(){
    this.router.navigateByUrl("signup/profile");
  }

  gotoLogin(e){
    e.preventDefault();
    this.router.navigateByUrl("/login");
  }

  gotoVerification(e){
    e.preventDefault();
    this.router.navigateByUrl("/signup/verification");
  }

  ngOnInit(): void {
  }

}
