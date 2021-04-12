import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

  constructor() { }

  @ViewChild("salesCodeReference") salesCode: jqxInputComponent;
  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("salesDateReference") salesDate: jqxDateTimeInputComponent;
  @ViewChild("unitPriceReference") unitPrice: jqxNumberInputComponent;
  @ViewChild("quantityCodeReference") quantity: jqxNumberInputComponent;
  @ViewChild("totalPriceReference") totalPrice: jqxNumberInputComponent;

  productId;

  ngOnInit(): void {
  }

}
