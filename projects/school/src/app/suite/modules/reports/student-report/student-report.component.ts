import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {

  constructor() { }

  @ViewChild('studentCodeReference') studentCode: jqxDropDownListComponent;
  @ViewChild('studentNameReference') studentName: jqxDropDownListComponent;
  @ViewChild('reportNameReference') reportName: jqxInputComponent;
  @ViewChild('reportDateReference') reportDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
    { text: "Class Report", url: "/suite/reports/class-report" },
    { text: "Student Report", url: "/suite/reports/student-report" },
  ];

  ngOnInit(): void {
  }

}
