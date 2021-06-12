import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { UserAuthApiService } from '../user-auth-api.service';
import { MainNavbarComponent } from 'projects/application/src/app/main-navbar/main-navbar/main-navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authApi: UserAuthApiService,
    // private navbar: MainNavbarComponent
  ) { }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  emailErrors: any[] = [];
  passErrors: any[] = [];
  nfErrors: any[] = [];

  showPrompt = false;

  ngOnInit(): void {
  }

  loginSubmit(){
    this.authApi.postLogin(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (JSON.stringify(res).includes("key")){
            localStorage.setItem('token', res.key);

            // // reload main navbar after login
            // this.navbar.ngOnInit();
            this.showPrompt = true;
          }
        },
        err => {
          console.log(err);
          this.emailErrors = err.error.email;
          this.passErrors = err.error.password;
          this.nfErrors = err.error.non_field_errors;
        }
      )
  }


}
