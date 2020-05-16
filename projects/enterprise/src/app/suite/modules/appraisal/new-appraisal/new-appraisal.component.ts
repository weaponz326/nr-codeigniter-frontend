import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-new-appraisal',
  templateUrl: './new-appraisal.component.html',
  styleUrls: ['./new-appraisal.component.css']
})
export class NewAppraisalComponent implements OnInit {

  constructor() { }

  @ViewChild("newAppraisalReference") newAppraisal: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("appraisalCodeReference") appraisalCode: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxDropDownListComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxDropDownListComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;
  @ViewChild("supervisorReference") supervisor: jqxInputComponent;

  openWindow(){
    this.newAppraisal.open();
  }

  ngOnInit(): void {
  }

}
