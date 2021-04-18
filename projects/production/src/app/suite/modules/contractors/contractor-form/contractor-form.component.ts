import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.component.html',
  styleUrls: ['./contractor-form.component.css']
})
export class ContractorFormComponent implements OnInit {

  constructor() { }

  @ViewChild('contractorNameReference') contractorName: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxComboBoxComponent;
  @ViewChild('phoneReference') phone: jqxInputComponent;
  @ViewChild('emailReference') email: jqxInputComponent;
  @ViewChild('addressReference') address: jqxTextAreaComponent;
  @ViewChild('countryReference') country: jqxInputComponent;
  @ViewChild('stateReference') state: jqxInputComponent;
  @ViewChild('cityReference') city: jqxInputComponent;
  @ViewChild('postCodeReference') postCode: jqxInputComponent;
  @ViewChild('websiteReference') website: jqxInputComponent;
  @ViewChild('primaryContractReference') primaryContract: jqxInputComponent;
  @ViewChild('projectNameContractReference') projectName: jqxInputComponent;
  @ViewChild('contractTypeReference') contractType: jqxComboBoxComponent;
  @ViewChild('workDescriptionReference') workDescription: jqxTextAreaComponent;
  @ViewChild('workStartDateReference') workStartDate: jqxDateTimeInputComponent;
  @ViewChild('workEndDateReference') workEndDate: jqxDateTimeInputComponent;
  @ViewChild('contractStatusReference') contractStatus: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
