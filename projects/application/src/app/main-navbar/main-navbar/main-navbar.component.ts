// navbar for main landing page and all suite landing pages
// navbrand and other links are passed on to the component to allow it to be used in all the projects

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { MainNavbarApiService } from '../main-navbar-api.service'

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  @Input() source: "string"
  @Input() navBrand: "string"

  logged_in: any;
  name: any;

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

  logout(e){
    e.stopPropagation();

    this.navbarApi.postLogout()
      .subscribe(
        res => {
          console.log(res);

          localStorage.removeItem("token");
          localStorage.removeItem("personal_id");
          localStorage.removeItem("hospital_id");
          localStorage.removeItem("restaurant_id");
          localStorage.removeItem("school_id");
          localStorage.removeItem("enterprise_id");
          localStorage.removeItem("hotel_id");
          localStorage.removeItem("shop_id");
          localStorage.removeItem("production_id");

          // reload navbar
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      )

    console.log("u logging out? ...where u going?");
  }

  ngOnInit(): void {
    this.navbarApi.postSource(this.source)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

      this.navbarApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          this.logged_in = res.logged_in;
          this.name = res.name;
          localStorage.setItem('personal_id', res.id);
        },
        err => {
          console.log(err);
        }
      )
  }

}
