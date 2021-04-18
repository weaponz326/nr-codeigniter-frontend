import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  constructor() { }

  @ViewChild("materialNameReference") materialName: jqxInputComponent;
  @ViewChild("locationReference") location: jqxComboBoxComponent;
  @ViewChild("containerReference") container: jqxComboBoxComponent;
  @ViewChild("binNumberReference") binNumber: jqxComboBoxComponent;
  @ViewChild("quantityCodeReference") quantity: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
