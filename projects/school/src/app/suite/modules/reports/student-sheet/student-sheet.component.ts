import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-student-sheet',
  templateUrl: './student-sheet.component.html',
  styleUrls: ['./student-sheet.component.css']
})
export class StudentSheetComponent implements OnInit {

  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Subject", dataField: "subject", width: "50%" },
    { text: "Score", dataField: "score", columntype: "numberinput", editable: true, width: "10%" },
    { text: "Grade", dataField: "grade", editable: true, width: "10%" },
    { text: "Remarks", dataField: "remarks", editable: true, width: "30%" },
  ];

}
