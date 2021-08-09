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
    { text: "Dashboard", url: "/suite/reservations/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  // number of reservations line chart
  reservationsLineChartData: ChartDataSets[] = [
    { data: [50, 60, 24, 88, 54, 75, 60], label: 'Reservations' },
  ];

  reservationsLineChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

}
