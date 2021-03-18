import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  constructor() { }

  @ViewChild('classNameReference') className: jqxInputComponent;
  @ViewChild('termReference') term: jqxDropDownListComponent;
  @ViewChild('departmentReference') department: jqxComboBoxComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('classTeacherReference') classTeacher: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
