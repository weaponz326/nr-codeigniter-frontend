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

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

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
  @ViewChild("#feesTooltipReference") feesTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;

  isActive: boolean = false;

  createAccount(){
    this.router.navigateByUrl("/signup");
  }

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
          // user is hasn't selected an account
          this.isActive = false;
        }
      )
  }

}
