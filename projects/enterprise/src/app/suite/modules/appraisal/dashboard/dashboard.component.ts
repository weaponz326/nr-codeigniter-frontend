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
    { text: "Dashboard", url: "/suite/appraisal/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // appraisals by month line chart
  appraisalsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Appraisals' },
  ];

  appraisalsLineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

}
