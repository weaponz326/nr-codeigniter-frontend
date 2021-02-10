import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('sexReference') sexDropDownList: jqxDropDownListComponent;
  @ViewChild('phoneReference') phoneInput: jqxInputComponent;
  @ViewChild('emailReference') emailInput: jqxInputComponent;
  @ViewChild('addressReference') addressInput: jqxTextAreaComponent;
  @ViewChild('stateReference') stateInput: jqxInputComponent;
  @ViewChild('cityReference') cityInput: jqxInputComponent;
  @ViewChild('postCodeReference') postCodeInput: jqxInputComponent;
  @ViewChild('customerCodeReference') customerCodeInput: jqxInputComponent;
  @ViewChild('religionReference') religionInput: jqxComboBoxComponent;
  @ViewChild('allergiesReference') allergiesInput: jqxTextAreaComponent;
  @ViewChild('preferencesReference') preferencesInput: jqxTextAreaComponent;

  sexSource: any[] = ["Male", "Female"];

  ngOnInit(): void {
  }

}
