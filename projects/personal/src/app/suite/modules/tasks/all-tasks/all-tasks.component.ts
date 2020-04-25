import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput'
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  constructor() { }

  @ViewChild("searchInputReference") input: jqxInputComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "50%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "25%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "25%" },
  ];
  
}
