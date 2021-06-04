import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  constructor() { }

  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;
  @ViewChild("remarksReference") remarks: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
