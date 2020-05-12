import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-attendance',
  templateUrl: './all-attendance.component.html',
  styleUrls: ['./all-attendance.component.css']
})
export class AllAttendanceComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Attendance ID", dataField: "attendance_code", width: "15%" },
    { text: "Attendance Name", dataField: "attendance_name", width: "35%" },
    { text: "Term", dataField: "term", width: "25%" },
    { text: "Soruce", dataField: "source", width: "25%" },
  ];

  ngOnInit(): void {
  }

}
