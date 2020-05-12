import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.css']
})
export class ViewAssessmentComponent implements OnInit {

  constructor() { }

  @ViewChild('assessmentCodeReference') assessmentCode: jqxInputComponent;
  @ViewChild('assessmentNameReference') assessmentName: jqxInputComponent;
  @ViewChild('assessmentDateReference') assessmentDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('subjectReference') subject: jqxDropDownListComponent;
  @ViewChild('classReference') class: jqxDropDownListComponent;
  @ViewChild('createdByReference') createdBy: jqxDropDownListComponent;
  @ViewChild('saveAssessmentReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
