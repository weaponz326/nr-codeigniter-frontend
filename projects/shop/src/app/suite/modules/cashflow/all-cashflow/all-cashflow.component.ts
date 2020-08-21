import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-cashflow',
  templateUrl: './all-cashflow.component.html',
  styleUrls: ['./all-cashflow.component.css']
})
export class AllCashflowComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------

  columns: any[] = [
    { text: "Sheet Name", dataField: "sheet_name", width: "65%" },
    { text: "Sheet Type", dataField: "Sheet_type", width: "35%" },
  ];

}
