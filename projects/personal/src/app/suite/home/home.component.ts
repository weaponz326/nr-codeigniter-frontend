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

  @ViewChild("#portalTooltipReference") portalTootip: jqxTooltipComponent;
  @ViewChild("#calendarTooltipReference") calendarTootip: jqxTooltipComponent;
  @ViewChild("#notesTooltipReference") notesTootip: jqxTooltipComponent;
  @ViewChild("#accountsTooltipReference") accountsTootip: jqxTooltipComponent;
  @ViewChild("#tasksTooltipReference") tasksTootip: jqxTooltipComponent;
  @ViewChild("#budgetTooltipReference") budgetTootip: jqxTooltipComponent;
  @ViewChild("#settingsTooltipReference") settingsTootip: jqxTooltipComponent;

  isLoggedIn: boolean = false;

  createAccount(){
    this.router.navigateByUrl("/signup");
  }

  openCalendar(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/calendar');

    console.log("u are opening calendar...");
  }

  openBudget(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/budget');

    console.log("u are opening budget...");
  }

  openNotes(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/notes');

    console.log("u are opening notes...");
  }

  openAccounts(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/accounts');

    console.log("u are opening accounts...");
  }

  openTasks(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tasks');

    console.log("u are opening tasks...");
  }

  openPortal(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/portal');

    console.log("u are opening portal...");
  }

  openSettings(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings');

    console.log("u are opening settings...");
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
