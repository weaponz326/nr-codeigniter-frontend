import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------

  columns: any[] = [
    { text: "Bill ID", dataField: "bill_code", width: "15%" },
    { text: "Guest Name", dataField: "guest_name", width: "50%" },
    { text: "Guest ID", dataField: "guest_code", width: "15%" },
    { text: "Bill Date", dataField: "bill_date", filtertype: "range", width: "20%" },
  ];

}
