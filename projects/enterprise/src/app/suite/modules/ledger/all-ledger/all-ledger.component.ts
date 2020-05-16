import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-ledger',
  templateUrl: './all-ledger.component.html',
  styleUrls: ['./all-ledger.component.css']
})
export class AllLedgerComponent implements OnInit {

  constructor() { }

  @ViewChild('newButtonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Ledger ID", dataField: "ledger_code", width: "25%" },
    { text: "Ledger Name", dataField: "ledger_name", width: "50%" },
    { text: "Ledger Date", dataField: "ledger_date", width: "25%" },
  ]

  ngOnInit(): void {
  }

}