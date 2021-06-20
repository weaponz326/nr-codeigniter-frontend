import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-check-sheet',
  templateUrl: './check-sheet.component.html',
  styleUrls: ['./check-sheet.component.css']
})
export class CheckSheetComponent implements OnInit, AfterViewInit {

  constructor(private attendanceApi: AttendanceApiService) { }

  @ViewChild('dayReference') day: jqxDateTimeInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  sheetData;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.attendanceApi.getAttendanceSheet()
      .subscribe(
        res => {
          console.log(res);
          this.sheetData = res;                    
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  setLocaldata() {
    // TODO: set selected dates sheet to localdata
    this.source.localdata = this.sheetData;
    this.grid.updatebounddata();
  }

  getNewDay(){
    console.log('getting new date');
    this.source.localdata = null;
    this.grid.showloadelement();
  }

  // widgets
  // ------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'member_id', map: 'member>id', type: 'string' },
      { name: 'member_code', map: 'member>member_code', type: 'string' },
      { name: 'member_name', map: 'member>member_name', type: 'string' },
      { name: 'attendance', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Member ID", dataField: "member_code", width: "25%" },
    { text: "Member Name", dataField: "member_name", width: "55%" },
    { text: "Attendance", dataField: "attendance", editable: "true", columntype: "checkbox", width: "20%" },
  ];

}
