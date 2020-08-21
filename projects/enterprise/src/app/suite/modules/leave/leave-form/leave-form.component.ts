import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  @ViewChild('leaveCodeReference') leaveCode: jqxInputComponent;
  @ViewChild('employeeNameReference') employeeName: jqxDropDownListComponent;
  @ViewChild('employeeCodeReference') employeeCode: jqxDropDownListComponent;
  @ViewChild('dateRequestedReference') dateRequested: jqxDateTimeInputComponent;
  @ViewChild('leaveTypeReference') leaveType: jqxDropDownListComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;
  @ViewChild('durationReference') duration: jqxNumberInputComponent;
  @ViewChild('reasonReference') reason: jqxTextAreaComponent;
  @ViewChild('statusReference') leaveStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
