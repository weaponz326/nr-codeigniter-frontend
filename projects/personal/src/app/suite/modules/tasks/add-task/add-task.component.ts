import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<object>();

  @ViewChild("addTaskReference") addTaskWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("taskFormReference") taskForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(){
    this.addTaskWindow.open();
  }

  addTask(taskData: object){
    this.taskAdded.emit(taskData);
    console.log(taskData);
  }

}
