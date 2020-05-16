import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  // transanctoins grid settings
  columns: any[] = [
    { text: "Transaction Date", dataField: "transaction_date", columntype: "datetimeinput", width: "20%" },
    { text: "Description", dataField: "description", width: "45%" },
    { text: "Transaction Type", dataField: "transaction_type", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  ngOnInit(): void {
  }

}
