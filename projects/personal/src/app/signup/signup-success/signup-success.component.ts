// user gets routed here after successful registtration

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';


@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.css'],
  providers: [ MainNavbarApiService ]
})
export class SignupSuccessComponent implements OnInit {

  name: any;
  redirectionMsg: any;

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

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

    // set redirection message according to user source
    this.navbarApi.getSource()
      .subscribe(
        res => {
          if (res.user_source == "personal"){
            this.redirectionMsg = "continue to Personal";
          }else if (res.user_source == "hospital"){
            this.redirectionMsg = "continue to Hospital";
          }else if (res.user_source == "restaurant"){
            this.redirectionMsg = "continue to Restaurant";
          }else if (res.user_source == "school"){
            this.redirectionMsg = "continue to School";
          }else if (res.user_source == "enterprise"){
            this.redirectionMsg = "continue to Enterprise";
          }else if (res.user_source == "hotel"){
            this.redirectionMsg = "continue to Hotel";
          }else if (res.user_source == "shop"){
            this.redirectionMsg = "continue to Shop";
          }else if (res.user_source == "production"){
            this.redirectionMsg = "continue to Production";
          }else{
            this.redirectionMsg = "back to home page";
          }

          console.log(res.user_source);
        },
        err => {
          console.log(err);
        }
      )
  }

  // redirect to guest page
  // which will also automatically redirect to either suite page for personal
  // or user page for other suites
  redirectLink(){
    window.location.href = "";
  }

}
