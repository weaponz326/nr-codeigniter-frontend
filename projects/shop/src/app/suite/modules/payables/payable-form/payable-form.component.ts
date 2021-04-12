import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-payable-form',
  templateUrl: './payable-form.component.html',
  styleUrls: ['./payable-form.component.css']
})
export class PayableFormComponent implements OnInit {

  constructor() { }

  @ViewChild("payableCodeReference") payableCode: jqxInputComponent;
  @ViewChild("payableDateReference") payableDate: jqxInputComponent;
  @ViewChild("dueDateReference") dueDate: jqxInputComponent;
  @ViewChild("invoiceNumberReference") invoiceNumber: jqxInputComponent;
  @ViewChild("customerNameReference") customerName: jqxInputComponent;
  @ViewChild("amountReference") amount: jqxNumberInputComponent;
  @ViewChild("datePaidReference") datePaid: jqxDateTimeInputComponent;

  ngOnInit(): void {
  }

}
