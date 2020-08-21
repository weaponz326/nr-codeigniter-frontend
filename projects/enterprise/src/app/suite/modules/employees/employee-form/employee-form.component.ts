import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton'
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @ViewChild('firstNameReference') firstName: jqxInputComponent;
  @ViewChild('lastNameReference') lastName: jqxInputComponent;
  @ViewChild('sexReference') sex: jqxRadioButtonComponent;
  @ViewChild('dobReference') dob: jqxDateTimeInputComponent;
  @ViewChild('nationalityReference') nationality: jqxInputComponent;
  @ViewChild('religionReference') religion: jqxInputComponent;
  @ViewChild('phoneReference') phone: jqxInputComponent;
  @ViewChild('emailReference') email: jqxInputComponent;
  @ViewChild('addressReference') address: jqxTextAreaComponent;
  @ViewChild('stateReference') state: jqxInputComponent;
  @ViewChild('cityReference') city: jqxInputComponent;
  @ViewChild('postCodeReference') postCode: jqxInputComponent;
  @ViewChild('employeeCodeReference') employeeCode: jqxInputComponent;
  @ViewChild('departmentReference') department: jqxInputComponent;
  @ViewChild('jobReference') job: jqxInputComponent;
  @ViewChild('payGradeReference') payGrade: jqxDropDownListComponent;
  @ViewChild('ssnReference') ssn: jqxInputComponent;
  @ViewChild('statusReference') employeeStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
