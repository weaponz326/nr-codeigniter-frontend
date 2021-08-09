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
    { text: "Dashboard", url: "/suite/reception/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // vsitors by purpose chart
  purposeDoughnutChartLabels: Label[] = [];
  purposeDoughnutChartData: SingleDataSet = [];

  // number of transactions line chart
  visitorsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Visitors' },
  ];

  visitorsLineChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

}
