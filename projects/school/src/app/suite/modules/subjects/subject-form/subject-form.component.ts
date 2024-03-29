import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  constructor() { }

  @ViewChild('subjectCodeReference') subjectCode: jqxInputComponent;
  @ViewChild('subjectNameReference') subjectName: jqxInputComponent;
  @ViewChild('departmentReference') department: jqxComboBoxComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
