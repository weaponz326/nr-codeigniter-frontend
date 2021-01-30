import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  @ViewChild("paymentCodeReference") paymentCode: jqxInputComponent;
  @ViewChild("paymentDateReference") paymentDate: jqxDateTimeInputComponent;
  @ViewChild("termReference") term: jqxDropDownListComponent;
  @ViewChild("studentNameReference") studentName: jqxDropDownListComponent;
  @ViewChild("studentCodeReference") studentCode: jqxDropDownListComponent;
  @ViewChild("billCodeReference") billCode: jqxDropDownListComponent;
  @ViewChild("amountDueReference") amountDue: jqxNumberInputComponent;
  @ViewChild("amountPaidReference") amountPaid: jqxNumberInputComponent;
  @ViewChild("balanceReference") amountbalancePayed: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
