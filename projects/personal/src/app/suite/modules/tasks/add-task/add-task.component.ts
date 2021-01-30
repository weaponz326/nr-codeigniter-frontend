import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  @Output() taskAdded = new EventEmitter<object>();

  @ViewChild("addTaskReference") addTaskWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("taskFormComponentReference") taskForm: TaskFormComponent;;

  ngOnInit(): void {
  }

  openWindow(){
    this.addTaskWindow.open();
  }

  addTask(){
    let taskData = {
      task_name: this.taskForm.taskName.val(),
      description: this.taskForm.description.val(),
      priority: this.taskForm.priority.val(),
      progress: this.taskForm.progress.val(),
      visibility: this.taskForm.visibility.val()
    }

    this.taskAdded.emit(taskData);
    console.log(taskData);
  }

}
