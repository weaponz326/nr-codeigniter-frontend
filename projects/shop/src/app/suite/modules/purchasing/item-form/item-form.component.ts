import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productCodeReference") productCode: jqxNumberInputComponent;
  @ViewChild("productNameReference") productName: jqxNumberInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  productIdStore;

  ngOnInit(): void {
  }

}
