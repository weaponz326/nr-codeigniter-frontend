import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor() { }

  @ViewChild("orderCodeReference") orderCode: jqxInputComponent;
  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("orderDateReference") orderDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxInputComponent;
  @ViewChild("quantityCodeReference") quantity: jqxNumberInputComponent;
  @ViewChild("orderStatusReference") orderStatus: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
