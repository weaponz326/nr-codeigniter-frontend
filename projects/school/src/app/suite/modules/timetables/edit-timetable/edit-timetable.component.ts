import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TimetablesApiService } from '../timetables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.css']
})
export class EditTimetableComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
  ) { }

  @ViewChild('addClassReference') addClassutton: jqxButtonComponent;
  @ViewChild('classesReference') classesGrid: jqxGridComponent;
  @ViewChild('addPeriodReference') addPeriodutton: jqxButtonComponent;
  @ViewChild('periodsReference') periodsGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.classesGrid.showloadelement();
    this.getClassesData();
    this.periodsGrid.showloadelement();
    this.getPeriodsData();
  }

  getClassesData(){
    this.timetablesApi.getTimetableClasses()
      .subscribe(
        res => {
          console.log(res);
          this.classesSource.localdata = res;
          this.classesGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getPeriodsData(){
    this.timetablesApi.getTimetablePeriods()
      .subscribe(
        res => {
          console.log(res);
          this.periodsSource.localdata = res;
          this.periodsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // --------------------------------------------------------------------------------------

  // classes grid

  classesSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'class_name', type: 'string' },
      { name: 'department', type: 'string' },
    ],
    id: 'id',
  }

  classesDataAdapter: any = new jqx.dataAdapter(this.classesSource);

  classesColumns: any[] = [
    { text: "Class Name", dataField: "class_name", width: "30%" },
    { text: "Department", dataField: "department", width: "70%" },
  ];

  // periods grid

  periodsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'period', type: 'string' },
      { name: 'period_from', type: 'string' },
      { name: 'period_to', type: 'string' },
    ],
    id: 'id',
  }

  periodsDataAdapter: any = new jqx.dataAdapter(this.periodsSource);

  periodsColumns: any[] = [
    { text: "Period", dataField: "period", width: "50%" },
    { text: "Period From", dataField: "period_from", width: "25%" },
    { text: "Period To", dataField: "period_to", width: "25%" },
  ];

  // main timetable grid

  timetableSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'clas', type: 'string' },
      { name: 'period', type: 'string' },
      { name: 'monday', type: 'string' },
      { name: 'tuesday', type: 'string' },
      { name: 'wednesday', type: 'string' },
      { name: 'thursday', type: 'string' },
      { name: 'friday', type: 'string' },
    ],
    id: 'id',
  }

  timetableDataAdapter: any = new jqx.dataAdapter(this.timetableSource);

  timetableColumns: any[] = [
    { text: "Class", columngroup: 'classGroup', dataField: "clas", align: "center", width: "15%" },
    { text: "Period", columngroup: 'classGroup', dataField: "period", align: "center", width: "10%" },
    { text: "Monday", dataField: "monday", align: "center", width: "15%" },
    { text: "Tuesday", dataField: "tuesday", align: "center", width: "15%" },
    { text: "Wednesday", dataField: "wednesday", align: "center", width: "15%" },
    { text: "Thursday", dataField: "thursday", align: "center", width: "15%" },
    { text: "Friday", dataField: "friday", align: "center", width: "15%" },
  ];

  classColumnGroups: any[] = [
    { text: "", align: "center", name: "classGroup" }
  ];

}
