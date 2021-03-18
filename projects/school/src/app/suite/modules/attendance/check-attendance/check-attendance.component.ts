import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxGrid';

@Component({
  selector: 'app-check-attendance',
  templateUrl: './check-attendance.component.html',
  styleUrls: ['./check-attendance.component.css']
})
export class CheckAttendanceComponent implements OnInit {

  constructor() { }

  @ViewChild('attendanceCodeReference') attendanceCode: jqxInputComponent;
  @ViewChild('attendanceNameReference') attendanceName: jqxInputComponent;
  @ViewChild('dateReference') button: jqxDateTimeInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance" },
    { text: "View Attendance", url: "/suite/attendance/view-attendance" },
    { text: "Check Attendance", url: "/suite/attendance/check-attendance" },
  ];

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "25%" },
    { text: "Student Name", dataField: "student_name", width: "60%" },
    { text: "Attendance", dataField: "attendance", editable: "true", columntype: "checkbox", width: "15%" },
  ];

}
