import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  constructor(private attendanceApi: AttendanceApiService) { }

  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  sourceLocalData: any[] = [];
  sourceDatafields: any[] = [];
  columns: any[] = [
    { text: "Member ID", dataField: "member_code", pinned: "true", width: "8%", minwidth: "80" },
    { text: "Member Name", dataField: "member_name", pinned: "true", width: "22%", minwidth: "150" },
  ];

  ngOnInit(): void {
    this.refreshSheet();
  }

  refreshSheet(){
    // this.loadingSpinner.httpLoader.open();
    this.attendanceApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getDays();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  getDays(){
    this.attendanceApi.getDays()
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          this.setColumns(res.data);
          this.setSource(res.data);
          // this.getSheet();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  getSheet(){
    this.attendanceApi.getAttendanceSheet()
      .subscribe(
        res => {
          console.log(res);
          this.sourceLocalData = res;
          // this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // --------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: this.sourceDatafields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  setColumns(days) {
    days.forEach((day) => {
      this.columns.push({ text: day.day, dataField: day.id.toString(), columntype: 'checkbox', width: "50" });
    });
    console.log(this.columns);
  }

  setSource(days) {
    this.sourceDatafields = [
      { name: 'id', type: 'string' },
      { name: 'member_id', map: 'member>id', type: 'string' },
      { name: 'member_code', map: 'member>member_code', type: 'string' },
      { name: 'member_name', map: 'member>member_name', type: 'string' },
    ];

    days.forEach((day) => {
      this.sourceDatafields.push({ name: day.id.toString(), type: 'bool' });
    });
    console.log(this.sourceDatafields);
  }

}
