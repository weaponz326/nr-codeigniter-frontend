import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  constructor() { }

  @ViewChild('sheetButtonReference') button: jqxButtonComponent;
  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", pinned: "true", width: "8%" },
    { text: "Employee Name", dataField: "employee_name", pinned: "true", width: "22%" },
  ];

  ngOnInit(): void {
  }

}
