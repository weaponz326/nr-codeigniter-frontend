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
    { text: "Dashboard", url: "/suite/diagnosis/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // number of diagnosis line chart
  diagnosisLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Diagnosis' },
  ];

  diagnosisLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satturday', 'Sunday'];

  // diagnosis by encounter doughnut chart
  encounterDoughnutChartLabels: Label[] = ['Malaria', 'Stroke', 'Hypertension', 'Stomach Disorders', 'Pneumonia', 'Others'];
  encounterDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];

}
