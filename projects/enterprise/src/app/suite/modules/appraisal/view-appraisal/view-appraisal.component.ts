import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-appraisal',
  templateUrl: './view-appraisal.component.html',
  styleUrls: ['./view-appraisal.component.css']
})
export class ViewAppraisalComponent implements OnInit {

  @ViewChild("appraisalCodeReference") appraisalCode: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxDropDownListComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxDropDownListComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;
  @ViewChild("supervisorReference") supervisor: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
