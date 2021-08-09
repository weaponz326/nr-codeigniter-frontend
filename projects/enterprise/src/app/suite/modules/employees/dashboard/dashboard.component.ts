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
    { text: "Dashboard", url: "/suite/employees/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // employees by gender
  genderPieChartLabels: Label[] = ['Male', 'Female'];
  genderPieChartData: SingleDataSet = [50, 44];

  // employees by age line chart
  ageLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88], label: 'Age' },
  ];

  ageLineChartLabels: Label[] = ['21 - 30', '31 - 40', '41 - 50', '51 - 60'];

  // employees by department
  departmentDoughnutChartLabels: Label[] = [];
  departmentDoughnutChartData: SingleDataSet = [];

}
