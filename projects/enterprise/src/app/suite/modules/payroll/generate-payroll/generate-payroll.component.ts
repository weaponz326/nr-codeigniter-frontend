import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-generate-payroll',
  templateUrl: './generate-payroll.component.html',
  styleUrls: ['./generate-payroll.component.css']
})
export class GeneratePayrollComponent implements OnInit {

  @ViewChild("generatePayrollReference") generatePayroll: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("payrollNameReference") payrollNameInput: jqxInputComponent;
  @ViewChild("month") month: jqxDropDownListComponent;
  @ViewChild("year") year: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // open add account popup dialog window
  openWindow(){
    this.generatePayroll.open();
  }

}
