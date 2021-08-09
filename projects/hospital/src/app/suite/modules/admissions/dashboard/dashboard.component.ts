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
    { text: "Dashboard", url: "/suite/admissions/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // type pie chart
  typePieChartLabels: Label[] = ['Out-Patient', 'In-Patient'];
  typePieChartData: SingleDataSet = [50, 20];

  // number of admissions line chart
  admissionsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Admissions' },
  ];

  admissionsLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satturday', 'Sunday'];

  // admission by encounter doughnut chart
  encounterDoughnutChartLabels: Label[] = ['Malaria', 'Stroke', 'Hypertension', 'Stomach Disorders', 'Pneumonia', 'Others'];
  encounterDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];

}
