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
    { text: "Dashboard", url: "/suite/budget/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  ieBarChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Income' },
    { data: [50, 60, 24, 88, 54, 75], label: 'Expendture' },
  ];

  ieBarChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

  iePieChartLabels: Label[] = ['Income', 'Expenditure'];
  iePieChartData: SingleDataSet = [50, 20];

}
