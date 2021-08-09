import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  navHeading: any[] = [
    { text: "Dashboard", url: "/suite/checkin/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // checkins by day line chart
  checkinLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 72], label: 'Check-Ins' },
  ];

  checkinLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

}
