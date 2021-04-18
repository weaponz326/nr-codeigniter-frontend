import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {

  constructor() { }

  @ViewChild('materialCodeReference') materialCode: jqxInputComponent;
  @ViewChild('materialNameReference') materialName: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxComboBoxComponent;
  @ViewChild('manufacuringCodeReference') manufacturingCode: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('supplierCodeReference') supplierCode: jqxInputComponent;
  @ViewChild('supplierNameReference') supplierName: jqxInputComponent;
  @ViewChild('unitPriceReference') unitPrice: jqxNumberInputComponent;
  @ViewChild('quantityReference') quantity: jqxNumberInputComponent;
  @ViewChild('totalPriceReference') totalPrice: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
