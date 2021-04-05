import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service'

import { jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private navbarApi: MainNavbarApiService,
  ) { }

  @ViewChild("#adminTooltipReference") adminTooltip: jqxTooltipComponent;
  @ViewChild("#accountsTooltipReference") accountsTooltip: jqxTooltipComponent;
  @ViewChild("#membersTooltipReference") membersTooltip: jqxTooltipComponent;
  @ViewChild("#committeesTooltipReference") committeesTooltip: jqxTooltipComponent;
  @ViewChild("#assetsTooltipReference") assetsTooltip: jqxTooltipComponent;
  @ViewChild("#duesTooltipReference") duesTooltip: jqxTooltipComponent;
  @ViewChild("#executivesTooltipReference") executivesTooltip: jqxTooltipComponent;
  @ViewChild("#activitiesTooltipReference") activitiesTooltip: jqxTooltipComponent;
  @ViewChild("#budgetTooltipReference") budgetTooltip: jqxTooltipComponent;
  @ViewChild("#attendanceTooltipReference") attendanceTooltip: jqxTooltipComponent;
  @ViewChild("#sectionsTooltipReference") sectionsTooltip: jqxTooltipComponent;
  @ViewChild("#portaTooltipReference") portalTooltip: jqxTooltipComponent;
  @ViewChild("#settingsTooltipReference") settingsTooltip: jqxTooltipComponent;

  isActive: boolean = false;

  ngOnInit(): void {
    this.navbarApi.checkActiveAssociation()
      .subscribe(
        res => {
          console.log(res);

          if (res.active == true){
            this.isActive = true;
          }
        },
        err => {
          console.log(err);
          console.log("the error comes from here");
          // user is hasn't selected an account
          this.isActive = false;
        }
      )
  }

  createAccount(){
    this.router.navigateByUrl("/signup");
  }


}
