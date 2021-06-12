// container body forform elemetns of main page and all suites
// also contains styles for all forms
// form heeading is determined according to the route

import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  constructor(private router: Router) { }

  formHeading;

  ngOnInit(): void {
    var route = this.router.url;
    console.log(route);

    if (route.includes("/user-auth/signup")){
      this.formHeading = "sign up with netRink";
    }
    else if(route.includes("/user-auth/register")){
      this.formHeading = "complete your registration";
    }
    else if(route.includes("/user-auth/login")){
      this.formHeading = "log in to netRink";
    }
    else if(route.includes("/user-auth/recovery")){
      this.formHeading = "Recover your account";
    }
    else if(route.includes("/user-auth/reset")){
      this.formHeading = "Reset your password";
    }
  }

}
