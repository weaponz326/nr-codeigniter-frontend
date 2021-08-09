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
    { text: "Dashboard", url: "/suite/teachers/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // teachers by department doughnut chart
  departmentDoughnutChartLabels: Label[] = [];
  departmentDoughnutChartData: SingleDataSet = [];

}
