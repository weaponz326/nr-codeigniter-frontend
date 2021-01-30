import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.css']
})
export class NewAssessmentComponent implements OnInit {

  constructor() { }

  @ViewChild("newAssessmentReference") newAssessment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('assessmentCodeReference') assessmentCode: jqxInputComponent;
  @ViewChild('assessmentNameReference') assessmentName: jqxInputComponent;
  @ViewChild('assessmentDateReference') assessmentDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('subjectReference') subject: jqxDropDownListComponent;
  @ViewChild('classReference') class: jqxDropDownListComponent;
  @ViewChild('createdByReference') createdBy: jqxDropDownListComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newAssessment.open();
  }

}
