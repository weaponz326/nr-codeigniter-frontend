import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  @ViewChild('assetCodeReference') assetCode: jqxInputComponent;
  @ViewChild('assetNameReference') assetName: jqxInputComponent;
  @ViewChild('assetTypeReference') assetType: jqxInputComponent;
  @ViewChild('categoryTypeReference') category: jqxInputComponent;
  @ViewChild('datePurchasedReference') datePurchased: jqxDateTimeInputComponent;
  @ViewChild('purchasedValueReference') purchasedValue: jqxNumberInputComponent;
  @ViewChild('supplierReference') supplier: jqxDateTimeInputComponent;
  @ViewChild('brandReference') brand: jqxInputComponent;
  @ViewChild('modelReference') model: jqxInputComponent;
  @ViewChild('serialNumberReference') serialNumber: jqxInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('conditionReference') condition: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
