import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton'
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

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
  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;
  @ViewChild('classReference') class: jqxDropDownListComponent;
  @ViewChild('termReference') term: jqxDropDownListComponent;
  @ViewChild('admissionDateReference') admissionDate: jqxDateTimeInputComponent;
  @ViewChild('previousSchoolReference') previousSchool: jqxInputComponent;
  @ViewChild('parentNameReference') parentName: jqxDropDownListComponent;
  @ViewChild('relationshipReference') relationship: jqxComboBoxComponent;
  
  ngOnInit(): void {
  }

}
