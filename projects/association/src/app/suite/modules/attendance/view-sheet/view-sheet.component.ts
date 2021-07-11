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

  sheetLocalData: any[] = [];

  sheetDataFields: any[] = [
    { name: 'member_code', type: 'string' },
    { name: 'member_name', type: 'string' },
  ];

  sheetColumns: any[] = [
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
          this.getAttendanceDays();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  getAttendanceDays(){
    this.attendanceApi.getAttendanceDays()
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          this.setAttendanceColumns(res.data);

          this.getMembersData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  getMembersData(){
    this.attendanceApi.getAttendanceMembers()
      .subscribe(
        res => {
          console.log(res);
          this.setMemberData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getChecksData(){
    this.attendanceApi.getAttendanceChecks()
      .subscribe(
        res => {
          console.log(res);
          this.setChecksData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  addNewDay(dayData){
    this.attendanceApi.postDay(dayData)
      .subscribe(
        res => {
          console.log(res);
          this.refreshSheet();
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
    dataFields: this.sheetDataFields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  setAttendanceColumns(attendanceDays) {
    attendanceDays.forEach(day => {
      // datafields
      this.sheetDataFields.push({ name: day.id, type: 'string' });

      // columns
      var dayColumn = { text: day.day, dataField: day.id, editable: "true", width: 100, align: 'center',
        columntype: 'checkbox',
        createeditor: function (row, value, editor) {
          editor.jqxCheckBox({ });
        }
      };
      this.sheetColumns.push(dayColumn);
    });
  }

  setMemberData(sheetData){
    this.sheetLocalData = [];

    sheetData.forEach(sheet => {
      let data = { id: sheet.id, member_name: sheet.member.member_name, member_code: sheet.member.member_code };
      this.sheetLocalData.push(data);
      console.log(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();

    this.getChecksData();
  }

  setChecksData(checksData){
    this.sheetLocalData.forEach((sheet, i) => {
      checksData.forEach(check => {
        if (sheet.id == check.attendance_member){
          this.sheetLocalData[i] = Object.assign(this.sheetLocalData[i], {check: check.check});
        }
      });
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

}
