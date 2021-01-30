import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-terms',
  templateUrl: './all-terms.component.html',
  styleUrls: ['./all-terms.component.css']
})
export class AllTermsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Term Name", dataField: "term_name", width: "40%" },
    { text: "Term Begin", dataField: "term_begin", filtertype: "range", width: "18%" },
    { text: "Term End", dataField: "term_end", filtertype: "range", width: "18%" },
    { text: "Academic Year", dataField: "academic_year", width: "24%" },
  ];

}
