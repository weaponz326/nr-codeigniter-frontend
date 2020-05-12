import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit {

  constructor() { }

  @ViewChild("addAssessmentReference") addAssessment: jqxWindowComponent;
  @ViewChild("termReference") term: jqxDropDownListComponent;
  @ViewChild("subjectReference") subject: jqxDropDownListComponent;
  @ViewChild("allAsessmentReference") allAssessment: jqxListBoxComponent;
  @ViewChild("selectAsessmentReference") selectAssessment: jqxListBoxComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  openWindow(){
    this.addAssessment.open();
  }

  ngOnInit(): void {
  }

}
