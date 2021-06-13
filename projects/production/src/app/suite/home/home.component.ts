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
  @ViewChild("#stockTooltipReference") stockTooltip: jqxTooltipComponent;
  @ViewChild("#equipmentTooltipReference") equipmentTooltip: jqxTooltipComponent;
  @ViewChild("#purcahsingTooltipReference") purchasingTooltip: jqxTooltipComponent;
  @ViewChild("#ordersTooltipReference") ordersTooltip: jqxTooltipComponent;
  @ViewChild("#manufacturingTooltipReference") manufacturingTooltip: jqxTooltipComponent;
  @ViewChild("#contractorsTooltipReference") contractorsTooltip: jqxTooltipComponent;
  @ViewChild("#projectsTooltipReference") projectsTooltip: jqxTooltipComponent;
  @ViewChild("#workersTooltipReference") workersTooltip: jqxTooltipComponent;
  @ViewChild("#tasksTooltipReference") tasksTooltip: jqxTooltipComponent;
  @ViewChild("#productsTooltipReference") productsTooltip: jqxTooltipComponent;
  @ViewChild("#rosterTooltipReference") rosterTooltip: jqxTooltipComponent;
  @ViewChild("#materialsTooltipReference") materialsTooltip: jqxTooltipComponent;
  @ViewChild("#staffTooltipReference") staffTooltip: jqxTooltipComponent;
  @ViewChild("#portalTooltipReference") portalTooltip: jqxTooltipComponent;
  @ViewChild("#settingsTooltipReference") settingsTooltip: jqxTooltipComponent;

  isActive: boolean = false;

  ngOnInit(): void {
    // this.navbarApi.checkActiveHospital()
    //   .subscribe(
    //     res => {
    //       console.log(res);

    //       if (res.active == true){
    //         this.isActive = true;
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       console.log("the error comes from here");
    //       // user is hasn't selected an account
    //       this.isActive = false;
    //     }
    //   )
  }

  createAccount(){
    this.router.navigateByUrl("/signup");
  }

}
