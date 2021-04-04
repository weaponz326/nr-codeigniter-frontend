import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrls: ['./view-ledger.component.css']
})
export class ViewLedgerComponent implements OnInit {

  constructor() { }

  @ViewChild("ledgerCodeReference") ledgerCode: jqxInputComponent;
  @ViewChild("ledgerNameReference") ledgerName: jqxInputComponent;
  @ViewChild("ledgerDateReference") ledgerDate: jqxDateTimeInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Ledger", url: "/suite/ledger/all-ledger" },
    { text: "View Ledger", url: "/suite/ledger/view-ledger" },
  ];

  ngOnInit(): void {
  }

}
