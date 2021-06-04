import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('equipmentCodeReference') equipmentCode: jqxInputComponent;
  @ViewChild('equipmentNameReference') equipmentName: jqxInputComponent;
  @ViewChild('equipmentTypeReference') equipmentType: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxInputComponent;
  @ViewChild('brandReference') brand: jqxInputComponent;
  @ViewChild('modelReference') model: jqxInputComponent;
  @ViewChild('serialNumberReference') serialNumber: jqxInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('conditionReference') condition: jqxDropDownListComponent;
  @ViewChild('statusReference') equipmentStatus: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
