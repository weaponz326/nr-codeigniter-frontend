import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  @ViewChild("deliveryCodeReference") deliveryCode: jqxInputComponent;
  @ViewChild("deliveryDateReference") deliveryDate: jqxDateTimeInputComponent;
  @ViewChild("orderCodeReference") orderCode: jqxDropDownListComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("deliveryStatusReference") deliveryStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
