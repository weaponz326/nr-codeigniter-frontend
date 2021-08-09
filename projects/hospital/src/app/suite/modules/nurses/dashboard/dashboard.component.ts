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
    { text: "Dashboard", url: "/suite/nurses/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // nurses by department doughnut chart
  departmentDoughnutChartLabels: Label[] = ['Nurses', 'Doctors', 'Staff', 'Neural', 'Gynacology', 'Others'];
  departmentDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];

}
