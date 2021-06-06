import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor() { }

  @Output() taskEdited = new EventEmitter<object>();
  @Output() taskDeleted = new EventEmitter<object>();

  @ViewChild("editTaskReference") editTaskWindow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("taskFormComponentReference") taskForm: TaskFormComponent;;

  taskId;
  taskIndex;

  ngOnInit(): void {
  }

  openWindow(task, index){
    this.editTaskWindow.open();
    this.taskIndex = index;
    this.taskId = task.id;
    console.log(task);

    this.taskForm.taskName.val(task.task_name);
    this.taskForm.description.val(task.description);
    this.taskForm.taskDate.val(task.task_date);
    this.taskForm.taskTime.val(task.task_time);
    this.taskForm.taskStatus.val(task.task_status);
  }

  closeWindow(){
    this.editTaskWindow.close();
  }

  editTask(){
    let taskData = {
      task_name: this.taskForm.taskName.val(),
      description: this.taskForm.description.val(),
      task_date: this.taskForm.taskDate.val(),
      task_time: this.taskForm.taskTime.val(),
      task_status: this.taskForm.taskStatus.val()
    }

    this.taskEdited.emit({ id: this.taskId, data: taskData, index: this.taskIndex });
    this.closeWindow();

    console.log(taskData);
  }

  deleteTask(){
    this.taskDeleted.emit({ id: this.taskId, index: this.taskIndex });
    this.closeWindow();
  }

}
