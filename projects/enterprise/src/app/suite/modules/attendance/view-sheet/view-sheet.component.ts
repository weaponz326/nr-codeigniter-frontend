import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

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
export class ViewSheetComponent implements OnInit, AfterViewInit {

  constructor(private attendanceApi: AttendanceApiService) { }

  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

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
          this.getEmployeesData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getEmployeesData(){
    this.attendanceApi.getAttendanceEmployees()
      .subscribe(
        res => {
          console.log(res);
          this.setEmployeeData(res);
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
    this.sheetDataFields.push({ name: 'id', type: 'string' });
    this.sheetDataFields.push({ name: 'employee_name', map: 'employee>employee_name', type: 'string' });
    this.sheetDataFields.push({ name: 'employee_code', map: 'employee>employee_code', type: 'string' });

    // set columns
    this.sheetColumns = [];
    this.sheetColumns.push({ text: "Employee ID", dataField: "employee_code", pinned: "true", width: "8%", minwidth: 70 });
    this.sheetColumns.push({ text: "Employee Name", dataField: "employee_name", pinned: "true", width: "22%", minwidth: 150 });

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

  setEmployeeData(sheetData){
    this.sheetLocalData = [];

    sheetData.forEach(sheet => {
      let data = { id: sheet.id, employee_name: sheet.employee.employee_name, employee_code: sheet.employee.employee_code };
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
        if (sheet.id == check.attendance_employee){
          this.sheetLocalData[i] = Object.assign(this.sheetLocalData[i], {check: check.check});
        }
      });
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

}
