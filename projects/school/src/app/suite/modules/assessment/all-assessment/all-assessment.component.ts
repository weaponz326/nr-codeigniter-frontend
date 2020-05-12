import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-assessment',
  templateUrl: './all-assessment.component.html',
  styleUrls: ['./all-assessment.component.css']
})
export class AllAssessmentComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Assessment ID", dataField: "assessment_code", width: "10%" },
    { text: "Assessment Name", dataField: "assessment_name", width: "30%" },
    { text: "Assessment Date", dataField: "assessment_date", filtertype: "range", width: "15%" },
    { text: "Term", dataField: "term", width: "20%" },
    { text: "Created By", dataField: "created_by", width: "25%" },
  ];

  ngOnInit(): void {
  }

}
