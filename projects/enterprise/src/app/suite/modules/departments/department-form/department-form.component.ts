import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('departmentNameReference') departmentName: jqxInputComponent;
  @ViewChild('descriptionNameReference') description: jqxTextAreaComponent;
  @ViewChild('funtionsNameReference') functions: jqxTextAreaComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('hodReference') hod: jqxDropDownListComponent;
  @ViewChild('sizeReference') size: jqxNumberInputComponent;
  
  ngOnInit(): void {
  }

}
