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
    { text: "Dashboard", url: "/suite/bills/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // charges by source doughnut chart
  sourceDoughnutChartLabels: Label[] = ['General Charges', 'Diagnosis', 'Appointments', 'Dispensary', 'Ward'];
  sourceDoughnutChartData: SingleDataSet = [50, 20, 30, 35, 52];

  // number of bills line chart
  billsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Bills' },
  ];

  billsLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satturday', 'Sunday'];

  // charges amount line chart
  chargesLineChartData: ChartDataSets[] = [
    { data: [50, 40, 24, 44, 78, 22], label: 'Charges' },
  ];

  chargesLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satturday', 'Sunday'];

}
