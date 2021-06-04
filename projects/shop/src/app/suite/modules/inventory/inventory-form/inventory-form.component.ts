import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';


@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productNameReference") productName: jqxInputComponent;
  @ViewChild("productCodeReference") productCode: jqxInputComponent;
  @ViewChild("locationReference") location: jqxComboBoxComponent;
  @ViewChild("containerReference") container: jqxComboBoxComponent;
  @ViewChild("binNumberReference") binNumber: jqxComboBoxComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;

  productIdStore;

  ngOnInit(): void {
  }

}
