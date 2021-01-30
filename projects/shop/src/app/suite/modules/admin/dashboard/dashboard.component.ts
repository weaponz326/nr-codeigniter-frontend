import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('invitationsButtonReference') invitationsButton: jqxButtonComponent;
  @ViewChild('allUsersButtonReference') allUsersButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
