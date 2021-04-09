import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  constructor() { }

  @ViewChild('assetCodeReference') assetCode: jqxInputComponent;
  @ViewChild('assetNameReference') assetName: jqxInputComponent;
  @ViewChild('assetTypeReference') assetType: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxInputComponent;
  @ViewChild('brandReference') brand: jqxInputComponent;
  @ViewChild('modelReference') model: jqxInputComponent;
  @ViewChild('purchasedDateReference') purchasedDate: jqxDateTimeInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('conditionReference') condition: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
