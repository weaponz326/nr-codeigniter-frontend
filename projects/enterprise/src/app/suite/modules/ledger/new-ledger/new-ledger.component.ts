import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

@Component({
  selector: 'app-new-ledger',
  templateUrl: './new-ledger.component.html',
  styleUrls: ['./new-ledger.component.css']
})
export class NewLedgerComponent implements OnInit {

  constructor() { }

  @ViewChild("newLedgerReference") newLedger: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("ledgerCodeReference") ledgerCode: jqxInputComponent;
  @ViewChild("ledgerNameReference") ledgerName: jqxInputComponent;
  @ViewChild("ledgerDateReference") ledgerDate: jqxDateTimeInputComponent;
  @ViewChild("accountNameReference") accountName: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumber: jqxInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;

  openWindow(){
    this.newLedger.open();
  }

  ngOnInit(): void {
  }

}
