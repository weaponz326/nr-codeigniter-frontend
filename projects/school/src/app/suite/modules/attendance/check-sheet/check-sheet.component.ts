import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-check-sheet',
  templateUrl: './check-sheet.component.html',
  styleUrls: ['./check-sheet.component.css']
})
export class CheckSheetComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('dateReference') grid: jqxDateTimeInputComponent;

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
