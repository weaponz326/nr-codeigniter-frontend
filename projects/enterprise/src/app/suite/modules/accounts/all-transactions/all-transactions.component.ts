import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {

  constructor() { }

  @ViewChild("#gridReference") grid: jqxGridComponent;

  columns: any[] = [
    { text: "Transaction Date", dataField: "transaction_date", filtertype: "range", width: "20%" },
    { text: "Description", dataField: "description", width: "45%" },
    { text: "Transaction Type", dataField: "transaction_type", filtertype: "checkedlist", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  ngOnInit(): void {
  }

}
