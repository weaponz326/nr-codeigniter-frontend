import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service'
import { SuiteRoutesService } from '../suite-routes.service';

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
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild("#adminTooltipReference") adminTooltip: jqxTooltipComponent;
  @ViewChild("#patientsTooltipReference") patientsTooltip: jqxTooltipComponent;
  @ViewChild("#appointmentsTooltipReference") appointmensTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#billsTooltipReference") billsTooltip: jqxTooltipComponent;
  @ViewChild("#doctorsTooltipReference") doctorsTooltip: jqxTooltipComponent;
  @ViewChild("#laboratoryTooltipReference") laboratoryTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#nursesTooltipReference") nursesTooltip: jqxTooltipComponent;
  @ViewChild("#prescriptionsTooltipReference") prescriptionsTooltip: jqxTooltipComponent;
  @ViewChild("#diagnosisTooltipReference") diagnosisTooltip: jqxTooltipComponent;
  @ViewChild("#drugsTooltipReference") drugsTooltip: jqxTooltipComponent;
  @ViewChild("#wardsTooltipReference") wardsTooltip: jqxTooltipComponent;
  @ViewChild("#admissionsTooltipReference") admissionsTooltip: jqxTooltipComponent;
  @ViewChild("#dispensaryTooltipReference") dispensaryTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  @ViewChild("#settingsTooltipReference") settingsTooltip: jqxTooltipComponent;

  isActive: boolean = false;

  ngOnInit(): void {
    this.navbarApi.checkActiveHospital()
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
          // user hasn't selected an account
          this.isActive = false;
        }
      )
  }

  createAccount(){
    this.router.navigateByUrl("/signup");
  }

}
