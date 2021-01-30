import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("DescriptionReference") description: jqxTextAreaComponent;
  @ViewChild("locationReference") location: jqxInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;
  @ViewChild("stockReference") stock: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
