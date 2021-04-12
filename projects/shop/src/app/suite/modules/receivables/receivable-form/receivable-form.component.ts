import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-receivable-form',
  templateUrl: './receivable-form.component.html',
  styleUrls: ['./receivable-form.component.css']
})
export class ReceivableFormComponent implements OnInit {

  constructor() { }

  @ViewChild("receivableCodeReference") receivableCode: jqxInputComponent;
  @ViewChild("receivableDateReference") receivableDate: jqxInputComponent;
  @ViewChild("dueDateReference") dueDate: jqxInputComponent;
  @ViewChild("invoiceNumberReference") invoiceNumber: jqxInputComponent;
  @ViewChild("customerNameReference") customerName: jqxInputComponent;
  @ViewChild("amountReference") amount: jqxNumberInputComponent;
  @ViewChild("dateReceivedReference") dateReceived: jqxDateTimeInputComponent;

  ngOnInit(): void {
  }

}
