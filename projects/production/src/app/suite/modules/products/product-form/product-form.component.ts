import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("productTypeReference") productType: jqxComboBoxComponent;
  @ViewChild("versionReference") Version: jqxInputComponent;
  @ViewChild("modelNumberReference") modelNumber: jqxInputComponent;
  @ViewChild("DescriptionReference") description: jqxTextAreaComponent;
  
  ngOnInit(): void {
  }

}
