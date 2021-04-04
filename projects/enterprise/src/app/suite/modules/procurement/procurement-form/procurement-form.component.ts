import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';


@Component({
  selector: 'app-procurement-form',
  templateUrl: './procurement-form.component.html',
  styleUrls: ['./procurement-form.component.css']
})
export class ProcurementFormComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
