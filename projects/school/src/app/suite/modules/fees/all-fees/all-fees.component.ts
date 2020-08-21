import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-fees',
  templateUrl: './all-fees.component.html',
  styleUrls: ['./all-fees.component.css']
})
export class AllFeesComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Fees ID", dataField: "fees_code", width: "25%" },
    { text: "Fees Description", dataField: "fees_description", width: "50%" },
    { text: "Fees Date", dataField: "fees_date", filtertype: "range", width: "25%" },
  ];

}
