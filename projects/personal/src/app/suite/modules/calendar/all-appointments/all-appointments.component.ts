// page lists all appointments
// user can serach for appoinments with date range

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CalendarApiService } from '../calendar-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit, AfterViewInit {

  constructor(private calendarApi: CalendarApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.calendarApi.getAppointments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  // grid properties

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
      { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' },
      { name: 'location', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'status', type: 'string' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "40%" },
    { text: "From", dataField: "start", filtertype: "range", width: "22%" },
    { text: "To", dataField: "end", filtertype: "range", width: "22%" },
    { text: "Status", dataField: "status", width: "16%" }
  ];

}
