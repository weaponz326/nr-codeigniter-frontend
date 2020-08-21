import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

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

  constructor() { }

  ngOnInit(): void {
  }

  taskData: object = {
    task_name: "this.taskName.val()",
    description: "this.description.val()",
    priority: "this.priority.val()",
    progress: "this.progress.val()"
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------

  prioritySource: any[] = ["Very Low Priority", "Low Priority", "High Priority", "Very High Priority", "Urgent"];
  progressSource: any[] = ["To do", "Doing", "Done"];

}
