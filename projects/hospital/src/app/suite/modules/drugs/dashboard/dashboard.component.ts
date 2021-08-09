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
    { text: "Dashboard", url: "/suite/drugs/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // doctors by speciality doughnut chart
  typeDoughnutChartLabels: Label[] = ['General', 'AntiBiotics', 'Antispeptics', 'Laxatives', 'The Other Drug', 'Others'];
  typeDoughnutChartData: SingleDataSet = [50, 7, 15, 22, 14, 42];


  // number of transactions line chart
  supplyLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Supply' },
  ];

  supplyLineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

}
