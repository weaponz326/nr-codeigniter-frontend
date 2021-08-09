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
    { text: "Dashboard", url: "/suite/payments/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // payments by day line chart
  paymentsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 72], label: 'Payments' },
  ];

  paymentsLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // revenue by day line chart
  revenueLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 65], label: 'Revenue' },
  ];

  revenueLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

}
