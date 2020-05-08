import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @ViewChild("taskNameReference") taskName: jqxInputComponent;
  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("priorityReference") priority: jqxDropDownListComponent;

  prioritySource: any[] = ["Very Low Priority", "Low Priority", "High Priority", "Very High Priority", "Urgent"];

  ngOnInit(): void {
  }

}
