// main calendar page with a scheduler

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CalendarApiService } from '../calendar-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.css']
})
export class ViewCalendarComponent implements OnInit, AfterViewInit {

  constructor(private calendarApi: CalendarApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('schedulerReference') scheduler: jqxSchedulerComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;

  userAppointment: any;

  getData(){
    this.calendarApi.getAppointments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  // widgets
  // ---------------------------------------------------------------------------------------------

  // scheduler properties

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

  appointmentDataFields: any = {
    from: "start",
    to: "end",
    id: "id",
    description: "description",
    location: "location",
    subject: "subject",
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

  editDialogCreate(event: any): void {
    event.args.fields.repeatContainer.hide();
    event.args.fields.timeZoneContainer.hide();
    event.args.fields.allDayContainer.hide();
    event.args.fields.colorContainer.hide();
    event.args.fields.fromLabel.html("Start");
    event.args.fields.toLabel.html("End");
  }

  appointmentAdd(event: any): void {
    console.log(event.args.appointment);

    this.userAppointment = {
      user: localStorage.getItem('personal_id'),
      subject: event.args.appointment.subject,
      start: event.args.appointment.from.toString(),
      end: event.args.appointment.to.toString(),
      location: event.args.appointment.location,
      description: event.args.appointment.description,
      status: event.args.appointment.jqxAppointment.status
    }

    console.log(this.userAppointment)

    this.calendarApi.postAppointment(this.userAppointment)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

}
