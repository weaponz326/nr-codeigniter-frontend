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
    { text: "Dashboard", url: "/suite/patients/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // gender pie chart
  genderPieChartLabels: Label[] = ['Male', 'Female'];
  genderPieChartData: SingleDataSet = [50, 68];

  // number of age line chart
  ageBarChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 82], label: 'Age' },
  ];

  ageBarChartLabels: Label[] = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '69-70'];

}
