import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild("itemDateReference") itemDateInput: jqxDateTimeInputComponent;
  @ViewChild("referenceNumberReference") referenceNumberInput: jqxInputComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("itemTypeReference") itemTypeDropDownList: jqxDropDownListComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  itemTypeSource: any[] = ['Credit', 'Debit'];

  ngOnInit(): void {
  }

}
