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

  // payments by week line chart
  paymentsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54], label: 'Payments' },
  ];

  paymentsLineChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];;

  // total revenue by week line chart
  revenueLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54], label: 'Revenue' },
  ];

  revenueLineChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];;

}
