import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';


@Component({
  selector: 'app-guest-wrapper',
  templateUrl: './guest-wrapper.component.html',
  styleUrls: ['./guest-wrapper.component.css']
})
export class GuestWrapperComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  ngOnInit(): void {
    this.navbarApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          // go to suite page if user is logged in
          if (res.logged_in == true){
            this.router.navigateByUrl("/suite");
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  gotoAbout() {
    console.log('to about...');
    document.querySelector('#aboutComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoPricing() {
    console.log('to pricing...');
    document.querySelector('#pricingComponentReference').scrollIntoView({ behavior: 'smooth'});
  }

  gotoContact() {
    console.log('to contact...');
    document.querySelector('#contactComponentReference').scrollIntoView({ behavior: 'smooth'});
  }

}
