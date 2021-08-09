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
    { text: "Dashboard", url: "/suite/orders/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // order type pie chart
  typePieChartLabels: Label[] = ['Sitting', 'Delivery', 'Drive Through'];
  typePieChartData: SingleDataSet = [50, 20, 10];

  // number of orders line chart
  ordersLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 60], label: 'Transactions' },
  ];

  ordersLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // orders by menu item doughnut chart
  menuItemDoughnutChartLabels: Label[] = [];
  menuItemDoughnutChartData: SingleDataSet = [];

}
