import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.css']
})
export class DrugFormComponent implements OnInit {

  @ViewChild('drugCodeReference') drugCode: jqxInputComponent;
  @ViewChild('drugCodeReference') drugName: jqxInputComponent;
  @ViewChild('drugCodeReference') genericName: jqxInputComponent;
  @ViewChild('drugCodeReference') category: jqxComboBoxComponent;
  @ViewChild('drugCodeReference') details: jqxTextAreaComponent;
  @ViewChild('drugCodeReference') manufacturer: jqxInputComponent;
  @ViewChild('drugCodeReference') quantity: jqxNumberInputComponent;
  @ViewChild('drugCodeReference') expiryDate: jqxDateTimeInputComponent;
  @ViewChild('drugCodeReference') storageBin: jqxInputComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
