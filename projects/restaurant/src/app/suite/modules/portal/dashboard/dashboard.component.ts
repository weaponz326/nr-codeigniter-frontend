import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { PortalApiService } from '../portal-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  navHeading: any[] = [
    { text: "Dashboard", url: "/suite/portal/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // total rinks line chart
  rinksLineChartData: ChartDataSets[] = [
    { data: [850, 720, 780, 750, 770, 750], label: 'RinkIn' },
    { data: [500, 600, 240, 880, 540, 750], label: 'RinkOut' },
  ];

  rinksLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // rink type pie chart
  typePieChartLabels: Label[] = ['RinkIn', 'RinkOut'];
  typePieChartData: SingleDataSet = [50, 20];

  // rink module doughnut chart
  moduleDoughnutChartLabels: Label[] = ['Appointments', 'Notes', 'Tasks'];
  moduleDoughnutChartData: SingleDataSet = [50, 20, 35];

}
