import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {

  constructor() { }

  @ViewChild('newButtonReference') newButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('transactionsButtonReference') transactionsButton: jqxButtonComponent;

  columns: any[] = [
    { text: "Account Name", dataField: "account_name", width: "45%" },
    { text: "Account No.", dataField: "account_number", width: "25%" },
    { text: "Bank Name", dataField: "bank_name", width: "30%" },
  ]

  ngOnInit(): void {
  }

}
