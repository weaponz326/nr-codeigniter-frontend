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
  @ViewChild("#parentsTooltipReference") parentsTooltip: jqxTooltipComponent;
  @ViewChild("#assessmentTooltipReference") assessmentTooltip: jqxTooltipComponent;
  @ViewChild("#subjectsTooltipReference") subjectsTooltip: jqxTooltipComponent;
  @ViewChild("#attendanceTooltipReference") attendanceTooltip: jqxTooltipComponent;
  @ViewChild("#studentsTooltipReference") studentsTooltip: jqxTooltipComponent;
  @ViewChild("#reportsTooltipReference") reportsTooltip: jqxTooltipComponent;
  @ViewChild("#teachersTooltipReference") teachersTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#paymentsTooltipReference") paymentsTooltip: jqxTooltipComponent;
  @ViewChild("#classesTooltipReference") classesTooltip: jqxTooltipComponent;
  @ViewChild("#timetablesTooltipReference") timetablesTooltip: jqxTooltipComponent;
  @ViewChild("#feesTooltipReference") feesTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  @ViewChild("#settingsTooltipReference") settingsTooltip: jqxTooltipComponent;

  isActive: boolean = false;

  ngOnInit(): void {
    this.navbarApi.checkActiveSchool()
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
