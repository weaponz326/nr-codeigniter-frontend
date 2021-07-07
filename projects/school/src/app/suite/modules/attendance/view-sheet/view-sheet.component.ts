import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private attendanceApi: AttendanceApiService) { }

  @ViewChild('sheetButtonReference') button: jqxButtonComponent;
  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  sheetLocalData: any = [];
  sheetDataFields: any = [];
  sheetColumns: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshSheet();
  }

  refreshSheet(){
    this.attendanceApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getAttendanceDays();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // for populating columns
  getAttendanceDays(){
    this.attendanceApi.getAttendanceDays()
      .subscribe(
        res => {
          console.log(res);
          this.setAttendanceColumns(res);

          this.grid.showloadelement();
          this.getSheetData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSheetData(){
    this.attendanceApi.getClassSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // --------------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: this.sheetDataFields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  setAttendanceColumns(attendanceDays){
    // set datafields
    this.sheetDataFields = [];
    this.sheetDataFields.push({ name: 'student_id', map: 'student>id', type: 'string' });
    this.sheetDataFields.push({ name: 'student_name', map: 'student>student_name', type: 'string' });
    this.sheetDataFields.push({ name: 'student_code', map: 'student>student_code', type: 'string' });

    // set columns
    this.sheetColumns = [];
    this.sheetColumns.push({ text: "Student ID", dataField: "student_code", pinned: "true", width: "8%", minwidth: 70 });
    this.sheetColumns.push({ text: "Student Name", dataField: "student_name", pinned: "true", width: "22%", minwidth: 150 });

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

  populateSheetData(sheetData){
    sheetData.forEach(sheet => {
      let data = { student_id: sheet.student.id, student_name: sheet.student.student_name, student_code: sheet.student.student_code };

      var sheetChecks = Object.entries(sheet.checks);
      sheetChecks.forEach(check => {
        data[check[0]] = check[1];
      });

      this.sheetLocalData.push(data);
      console.log(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

}
