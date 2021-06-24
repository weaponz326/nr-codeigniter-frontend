import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';


@Component({
  selector: 'app-guest-top',
  templateUrl: './guest-top.component.html',
  styleUrls: ['./guest-top.component.css']
})
export class GuestTopComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  @Input() source: string
  @Input() suiteName: string
  @Input() primaryCaption: string
  @Input() secondaryCaption: string
  @Input() features: object

  createAccount(e){
    e.preventDefault();

    console.log("u are about to create an account or accounts");

    // for non personal suites
    if (this.suiteName != "Personal"){
      this.navbarApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          // move straight to suite registration if user is logged in
          if (res.pk){
            this.router.navigateByUrl("/register");
          }else{
            this.router.navigateByUrl("user-auth/signup");     // all suites have a signup route
          }
        },
        err => {
          console.log(err);
        }
      )
    }

    // for pesonal suite
    else{
      this.router.navigateByUrl("user-auth/signup");
    }
  }

  ngOnInit(): void {
  }

}
