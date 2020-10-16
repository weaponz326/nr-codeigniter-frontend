import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @ViewChild("taskNameReference") taskName: jqxInputComponent;
  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("priorityReference") priority: jqxDropDownListComponent;
  @ViewChild("progressReference") progress: jqxDropDownListComponent;
  @ViewChild("visibilityReference") visibility: jqxCheckBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------

  prioritySource: any[] = ["Very Low Priority", "Low Priority", "High Priority", "Very High Priority", "Urgent"];
  progressSource: any[] = ["To do", "Doing", "Done"];

}
