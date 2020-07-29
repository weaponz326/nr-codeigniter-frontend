import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service'

import { jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ MainNavbarApiService ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  @ViewChild("#calendarTooltipReference") calendarTootip: jqxTooltipComponent;
  @ViewChild("#budgetTooltipReference") budgetTootip: jqxTooltipComponent;
  @ViewChild("#notesTooltipReference") notesTootip: jqxTooltipComponent;
  @ViewChild("#accountsTooltipReference") accountsTootip: jqxTooltipComponent;
  @ViewChild("#tasksTooltipReference") tasksTootip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTootip: jqxTooltipComponent;

  isLoggedIn: boolean = false;

  createAccount(){
    this.router.navigateByUrl("/signup");
  }

  ngOnInit(): void {
    this.navbarApi.getUser()
      .subscribe(
        res => {
          console.log(res);

          if (res.logged_in == true){
            this.isLoggedIn = true;
          }
        },
        err => {
          console.log(err);
          console.log("the error comes from here");
          // user is not authorized
          this.isLoggedIn = false;
        }
      )
  }

}
