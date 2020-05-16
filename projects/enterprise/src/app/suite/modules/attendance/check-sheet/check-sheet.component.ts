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

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", width: "25%" },
    { text: "Employee Name", dataField: "employee_name", width: "60%" },
    { text: "Attendance", dataField: "attendance", editable: "true", columntype: "checkbox", width: "15%" },
  ];

  ngOnInit(): void {
  }

}
