import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-ledger-table',
  templateUrl: './ledger-table.component.html',
  styleUrls: ['./ledger-table.component.css']
})
export class LedgerTableComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Date", dataField: "transaction_date", columntype: "datetimeinput", width: "15%" },
    { text: "Description", dataField: "description", width: "30%" },
    { text: "Reference No.", dataField: "reference_number", width: "10%" },
    { text: "Debit", dataField: "debit", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Credit", dataField: "credit", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Balance", dataField: "balance", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
  ];

}
