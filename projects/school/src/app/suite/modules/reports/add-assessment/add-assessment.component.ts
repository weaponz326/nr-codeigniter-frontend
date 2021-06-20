import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit {

  constructor() { }

  @ViewChild("addAssessmentReference") addAssessment: jqxWindowComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addAssessment.open();
  }

}
