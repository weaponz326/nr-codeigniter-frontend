import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------

  columns: any[] = [
    { text: "Report ID", dataField: "report_code", width: "10%" },
    { text: "Report Name", dataField: "report_name", width: "33%" },
    { text: "Report Date", dataField: "report_date", filtertype: "range", width: "12%" },
    { text: "Term", dataField: "term", width: "20%" },
    { text: "Class(es)", dataField: "class", width: "25%" },
  ];

}
