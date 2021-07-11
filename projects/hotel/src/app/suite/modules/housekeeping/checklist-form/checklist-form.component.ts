import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  constructor() { }

  @ViewChild("itemNumberReference") itemNumber: jqxNumberInputComponent;
  @ViewChild("itemDescriptionReference") itemDescription: jqxTextAreaComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;
  @ViewChild("remarksReference") remarks: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
