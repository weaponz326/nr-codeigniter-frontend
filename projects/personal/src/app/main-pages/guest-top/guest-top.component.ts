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

  @Input() source: "string"
  @Input() suiteName: "string"
  @Input() primaryCaption: "string"
  @Input() secondaryCaption: "string"
  @Input() features: "object"

  createAccount(e){
    e.preventDefault();
    this.router.navigateByUrl("/signup");     // all suites have a signup route

    console.log("u are about to create an account or accounts");
  }

  goForTour(e){
    e.preventDefault();
    this.router.navigateByUrl("/suite");

    console.log("strap in and enjoy the ride :D");
  }

  ngOnInit(): void {
  }

}
