import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdminApiService } from '../admin-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('invitationsButtonReference') invitationsButton: jqxButtonComponent;
  @ViewChild('allUsersButtonReference') allUsersButton: jqxButtonComponent;

  constructor(
    private adminApi: AdminApiService,
  ) { }

  navHeading: any[] = [
    { text: "Dashboard", url: "/suite/notes/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

}
