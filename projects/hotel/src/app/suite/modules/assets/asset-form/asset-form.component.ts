import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

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
  @ViewChild('brandReference') brand: jqxInputComponent;
  @ViewChild('modelReference') model: jqxInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('conditionReference') condition: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
