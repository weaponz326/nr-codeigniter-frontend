// page lists all appointments
// user can serach for appoinments with date range

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput'
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor() { }

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "40%" },
    { text: "From", dataField: "from_date", filtertype: "range", width: "22%" },
    { text: "To", dataField: "to_date", filtertype: "range", width: "22%" },
    { text: "Status", dataField: "appointment_status", width: "16%" }
  ];

}
