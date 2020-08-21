import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  @ViewChild('sheetButtonReference') button: jqxButtonComponent;
  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", pinned: "true", width: "8%" },
    { text: "Student Name", dataField: "student_name", pinned: "true", width: "22%" },
  ];

}
