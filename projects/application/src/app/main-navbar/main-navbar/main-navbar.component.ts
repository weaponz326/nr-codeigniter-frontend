// navbar for main landing page and all suite landing pages
// navbrand and other links are passed on to the component to allow it to be used in all the projects

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() source: "string"
  @Input() navBrand: "string"

  // navigates back to home page accourding user source
  goHome(e){
    e.stopPropagation();
    this.router.navigateByUrl("/");

    console.log("clicking on the navbrand with source of " + this.source);
  }

  login(e){
    e.stopPropagation();
    this.router.navigateByUrl("/login");

    console.log("u wanna log in ...");
  }

  signup(e){
    e.stopPropagation();
    this.router.navigateByUrl("/signup");

    console.log("u wanna sign up ...that's cool");
  }

  ngOnInit(): void {
  }

}
