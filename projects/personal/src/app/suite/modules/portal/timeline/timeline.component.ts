import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @ViewChild('goToSearchButtonReference') goToSearchbutton: jqxButtonComponent;
  @ViewChild('newButtonReference') newSearchbutton: jqxButtonComponent;

  personalId = localStorage.getItem('personal_id');
  rinks: any;

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
    this.portalApi.getRinks()
      .subscribe(
        res => {
          console.log(res);
          this.rinks = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewRink(rinkId){
    sessionStorage.setItem('rink_id', rinkId);
    this.router.navigateByUrl('/suite/portal/view-rink');
  }

}
