import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @ViewChild("taskNameReference") taskName: jqxInputComponent;
  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("taskDateReference") taskDate: jqxDateTimeInputComponent;
  @ViewChild("taskTimeReference") taskTime: jqxDateTimeInputComponent;
  @ViewChild("taskStatusReference") taskStatus: jqxCheckBoxComponent;

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------

  prioritySource: any[] = ["Very Low Priority", "Low Priority", "High Priority", "Very High Priority", "Urgent"];
  progressSource: any[] = ["To do", "Doing", "Done"];

}
