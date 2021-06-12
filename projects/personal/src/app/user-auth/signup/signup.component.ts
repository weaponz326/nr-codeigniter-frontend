import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { UserAuthApiService } from '../user-auth-api.service';
import { MainNavbarComponent } from 'projects/application/src/app/main-navbar/main-navbar/main-navbar.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authApi: UserAuthApiService,
    // private navbar: MainNavbarComponent
  ) { }

  signupForm = this.fb.group({
    email: ["", Validators.required],
    password1: ["", Validators.required],
    password2: ["", Validators.required]
  })

  emailErrors: any[] = [];
  pass1Errors: any[] = [];
  pass2Errors: any[] = [];
  nfErrors: any[] = [];

  showPrompt = false;

  ngOnInit(): void {
  }

  signupSubmit(){
    this.authApi.postSignup(this.signupForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.key){
            localStorage.setItem('token', res.key);
            // // reload main navbar after signing up
            // this.navbar.ngOnInit();

            this.showPrompt = true;
          }
        },
        err => {
          console.log(err);
          this.emailErrors = err.error.email;
          this.pass1Errors = err.error.password1;
          this.pass2Errors = err.error.password2;
          this.nfErrors = err.error.non_field_errors;
        }
      )

    console.log(this.signupForm.value);
  }

}
