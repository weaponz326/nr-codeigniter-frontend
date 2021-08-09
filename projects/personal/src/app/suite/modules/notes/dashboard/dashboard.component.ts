import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { NotesApiService } from '../notes-api.service';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
  ) { }

  navHeading: any[] = [
    { text: "Dashboard", url: "/suite/notes/dashboard" },
  ];

  ngOnInit(): void {
  }

  // ------------------------------------------------------------------------------------
  // charts

  chartOptions = {
    responsive: true,
  };

  notesLineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Notes' },
  ];

  notesLineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June',];

}
