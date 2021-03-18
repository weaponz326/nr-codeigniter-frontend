import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.css']
})
export class ClassReportComponent implements OnInit {

  constructor() { }

  @ViewChild('reportCodeReference') reportCode: jqxInputComponent;
  @ViewChild('reportNameReference') reportName: jqxInputComponent;
  @ViewChild('reportDateReference') reportDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('classReference') class: jqxDropDownListComponent;
  @ViewChild('saveReportReference') saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
    { text: "Class Report", url: "/suite/reports/class-report" },
  ];

  ngOnInit(): void {
  }

}
