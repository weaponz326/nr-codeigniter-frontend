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
    { text: "Dashboard", url: "/suite/cashflow/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // sheets by type pie chart
  typePieChartLabels: Label[] = ['Daily', 'Weekly', 'Monthly', 'Quaterly'];
  typePieChartData: SingleDataSet = [50, 20, 15, 6];

  // all sheets by month line chart
  sheetsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Sheets' },
  ];

  sheetsLineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

}
