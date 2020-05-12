import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-class-sheet',
  templateUrl: './class-sheet.component.html',
  styleUrls: ['./class-sheet.component.css']
})
export class ClassSheetComponent implements OnInit {

  constructor() { }

  @ViewChild('addAssessmentReference') addAssessment: jqxButtonComponent;
  @ViewChild('classGridReference') classGrid: jqxGridComponent;

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", pinned: "true", width: "8%" },
    { text: "Student Name", dataField: "student_name", pinned: "true", width: "22%" },
  ];

  ngOnInit(): void {
  }

}
