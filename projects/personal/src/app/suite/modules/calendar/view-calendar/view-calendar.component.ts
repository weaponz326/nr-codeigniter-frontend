// main calendar page with a scheduler

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.css']
})
export class ViewCalendarComponent implements OnInit {

  constructor() { }
  
  @ViewChild('schedulerReference') scheduler: jqxSchedulerComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;
  
  ngOnInit(): void {
  }

  appointmentDataFields: any = {
    from: "start",
    to: "end",
    id: "id",
    description: "description",
    location: "location",
    subject: "subject",
    resourceId: "calendar"
  };

  resources: any = {
    colorScheme: "scheme05",
    dataField: "calendar",
  };

  views: any[] = [
    'dayView',
    'weekView',
    'monthView'
  ];

}
