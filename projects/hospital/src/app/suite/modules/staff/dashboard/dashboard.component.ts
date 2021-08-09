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
    { text: "Dashboard", url: "/suite/staff/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // total transactions amount bar chart
  cbBarChartData: ChartDataSets[] = [
    { data: [850, 720, 780, 750, 770, 750], label: 'Credit ($)' },
    { data: [500, 600, 240, 880, 540, 750], label: 'Debit ($)' },
  ];

  cbBarChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

  // credit/debit pie chart
  cbPieChartLabels: Label[] = ['Credit', 'Debit'];
  cbPieChartData: SingleDataSet = [50, 20];

  // number of transactions line chart
  transactionsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75], label: 'Transactions' },
  ];

  transactionsLineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

}
