import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-assessment-table',
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.css']
})
export class AssessmentTableComponent implements OnInit {

  constructor() { }

  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "15%" },
    { text: "Student Name", dataField: "student_name", width: "35%" },
    { text: "Score", dataField: "score", columntype: "numberinput", editable: true, width: "10%" },
    { text: "Grade", dataField: "grade", editable: true, width: "10%" },
    { text: "Remarks", dataField: "remarks", editable: true, width: "30%" },
  ];

}
