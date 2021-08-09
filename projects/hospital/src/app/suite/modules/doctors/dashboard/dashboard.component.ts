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
    { text: "Dashboard", url: "/suite/doctors/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // doctors by speciality doughnut chart
  specialityDoughnutChartLabels: Label[] = ['General', 'Pediatrician', 'Cardio', 'Neural', 'Gynacology', 'Others'];
  specialityDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];

  // doctors by speciality doughnut chart
  departmentDoughnutChartLabels: Label[] = ['General', 'Pediatrician', 'Cardio', 'Neural', 'Gynacology', 'Others'];
  departmentDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];

}
