import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('orderTypeReference') orderType: jqxComboBoxComponent;
  @ViewChild('orderDateReference') orderDate: jqxDateTimeInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('projectReference') project: jqxInputComponent;
  @ViewChild('recepientReference') recepient: jqxInputComponent;
  @ViewChild('vendorReference') vendor: jqxInputComponent;
  @ViewChild('vendorPhoneReference') vendorPhone: jqxInputComponent;
  @ViewChild('vendorEmailReference') vendorEmail: jqxInputComponent;
  @ViewChild('vendorAddressReference') vendorAddress: jqxTextAreaComponent;
  @ViewChild('statusReference') orderStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
