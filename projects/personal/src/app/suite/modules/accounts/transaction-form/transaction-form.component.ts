import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor() { }

  @ViewChild("transactionDateReference") transactionDateInput: jqxDateTimeInputComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("transactionTypeReference") transactionTypeDropDownList: jqxDropDownListComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  transactionTypeSource: any[] = ['Credit', 'Debit'];

  ngOnInit(): void {
  }

}
