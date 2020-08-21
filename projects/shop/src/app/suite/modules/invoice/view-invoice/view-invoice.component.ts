import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  @ViewChild("invoiceNumberReference")invoiceNumber: jqxInputComponent;
  @ViewChild("invoiceDateReference") invoiceDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("customerContactReference") customerContact: jqxInputComponent;
  @ViewChild("dueDateReference") dueDate: jqxDateTimeInputComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
