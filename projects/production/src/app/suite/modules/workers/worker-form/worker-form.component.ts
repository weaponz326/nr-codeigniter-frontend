import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('sexReference') sexDropDownList: jqxDropDownListComponent;
  @ViewChild('dobReference') dobInput: jqxDateTimeInputComponent;
  @ViewChild('nationalityReference') nationalityInput: jqxInputComponent;
  @ViewChild('religionReference') religionInput: jqxInputComponent;
  @ViewChild('phoneReference') phoneInput: jqxInputComponent;
  @ViewChild('emailReference') emailInput: jqxInputComponent;
  @ViewChild('addressReference') addressInput: jqxTextAreaComponent;
  @ViewChild('stateReference') stateInput: jqxInputComponent;
  @ViewChild('cityReference') cityInput: jqxInputComponent;
  @ViewChild('postCodeReference') postCodeInput: jqxInputComponent;
  @ViewChild('workerCodeReference') workerCodeInput: jqxInputComponent;
  @ViewChild('specialityReference') specialityInput: jqxInputComponent;
  @ViewChild('departmentReference') departmentInput: jqxInputComponent;
  @ViewChild('jobReference') jobInput: jqxInputComponent;

  sexSource: any[] = ["Male", "Female"];

  ngOnInit(): void {
  }

}
