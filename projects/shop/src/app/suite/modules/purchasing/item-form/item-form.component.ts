import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  productIdStore;

  ngOnInit(): void {
  }

}
