import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TimetablesApiService } from '../timetables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';



@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
  ) { }

  @ViewChild('timetableCodeReference') timetableCode: jqxInputComponent;
  @ViewChild('timetableNameReference') timetableName: jqxInputComponent;
  @ViewChild('timetableDateReference') timetableDate: jqxDateTimeInputComponent;
  @ViewChild('classNameReference') className: jqxInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;

  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
    { text: "Full Timetable", url: "/suite/timetables/full-timetable" },
    { text: "Class Timetable", url: "/suite/timetables/class-timetable" },
  ];

  sheetLocalData: any = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getClass();
    this.getClassSheet();
  }

  getClass(){
    this.timetablesApi.getSingleClass()
      .subscribe(
        res => {
          console.log(res);
          this.timetableCode.val(res.timetable.timetable_code);
          this.timetableName.val(res.timetable.timetable_name);
          this.timetableDate.val(res.timetable.timetable_date);
          this.className.val(res.clas.class_name);
          this.term.val(res.term);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getClassSheet(){
    this.timetablesApi.getClassSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateClassSheet(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  populateClassSheet(classSheet){
    classSheet.forEach(sheet => {
      // timetable class id is not id of class but id of the timetable class instance
      let data = { id: sheet.id, period: sheet.timetable_period.period };
      this.sheetLocalData.push(data);

      console.log(this.sheetLocalData);
      this.timetableSource.localdata = this.sheetLocalData;
      this.grid.updatebounddata();
    });
  }

  // --------------------------------------------------------------------------------------------------

  timetableSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
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
    { text: "Period", dataField: "period", align: "center", width: "15%" },
    { text: "Monday", dataField: "monday", align: "center", width: "17%" },
    { text: "Tuesday", dataField: "tuesday", align: "center", width: "17%" },
    { text: "Wednesday", dataField: "wednesday", align: "center", width: "17%" },
    { text: "Thursday", dataField: "thursday", align: "center", width: "17%" },
    { text: "Friday", dataField: "friday", align: "center", width: "17%" },
  ];

}
