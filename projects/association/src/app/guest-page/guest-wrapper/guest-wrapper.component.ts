import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GuestPageApiService } from '../guest-page-api.service'


@Component({
  selector: 'app-guest-wrapper',
  templateUrl: './guest-wrapper.component.html',
  styleUrls: ['./guest-wrapper.component.css']
})
export class GuestWrapperComponent implements OnInit {

  constructor(private router: Router, private guestPageApi: GuestPageApiService) { }

  personalId: any;

  ngOnInit(): void {
    // redirect if user has an account
    this.guestPageApi.hasAccount()
      .subscribe(
        res => {
          console.log(res);
          if (res.has_account == true){
            this.router.navigateByUrl("/user");
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
