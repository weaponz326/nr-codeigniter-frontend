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
    { text: "Dashboard", url: "/suite/assessment/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // total assessments by week line chart
  assessmentsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Assessments' },
  ];

  assessmentsLineChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

  // assessments by classes bar chart
  classBarChartData: ChartDataSets[] = [];
  classBarChartLabels: Label[] = [];

  // assessments by subjects bar chart
  subjectBarChartData: ChartDataSets[] = [];
  subjectBarChartLabels: Label[] = [];

}
