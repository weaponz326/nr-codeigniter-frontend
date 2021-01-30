import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist/public_api';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

@Component({
  selector: 'app-view-payroll',
  templateUrl: './view-payroll.component.html',
  styleUrls: ['./view-payroll.component.css']
})
export class ViewPayrollComponent implements OnInit {

  constructor() { }

  @ViewChild("payrollNameReference") payrollName: jqxInputComponent;
  @ViewChild("dateGeneratedReference") dateGenerated: jqxDateTimeInputComponent;
  @ViewChild("monthReference") month: jqxDropDownListComponent;
  @ViewChild("yearReference") year: jqxDropDownListComponent;
  @ViewChild("statusReference") payrollStatus: jqxDropDownListComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("generateButtonReference") generateButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
