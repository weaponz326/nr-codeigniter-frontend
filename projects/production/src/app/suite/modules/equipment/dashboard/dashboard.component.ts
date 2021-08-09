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
    { text: "Dashboard", url: "/suite/equipment/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // equipment by type doughnut chart
  typeDoughnutChartLabels: Label[] = [];
  typeDoughnutChartData: SingleDataSet = [];

  // equipment by condition pie chart
  conditionPieChartLabels: Label[] = ['New', 'Good', 'Bad'];
  conditionPieChartData: SingleDataSet = [6, 50, 20];

}
