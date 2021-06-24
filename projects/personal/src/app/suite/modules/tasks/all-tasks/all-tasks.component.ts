import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TasksApiService } from '../tasks-api.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit, AfterViewInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild("buttonReference") button: jqxButtonComponent;

  @ViewChild("addTaskComponentReference") addTask: AddTaskComponent;;
  @ViewChild("editTaskComponentReference") editTask: EditTaskComponent;;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Tasks", url: "/suite/tasks/all-tasks" },
  ];

  taskList: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  getData(){
    this.loadingSpinner.httpLoader.open();

    this.tasksApi.getTasks()
      .subscribe(
        res => {
          console.log(res);
          this.taskList = res;
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  onTaskAdded(e: any) {
    this.loadingSpinner.httpLoader.open();

    let taskData = {
      user: localStorage.getItem('personal_id'),
      task_name: e.task_name,
      description: e.description,
      task_date: e.task_date,
      task_time: e.task_time,
      task_status: e.task_status,
    }

    this.tasksApi.postTask(taskData)
      .subscribe(
        res => {
          console.log(res);
          this.taskList.unshift(e);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  onTaskEdited(e: any) {
    this.loadingSpinner.httpLoader.open();

    this.tasksApi.putTask(e.id, e.data)
      .subscribe(
        res => {
          console.log(res);
          this.taskList[e.index] = e.data;
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  onTaskDeleted(e: any) {
    this.loadingSpinner.httpLoader.open();

    this.tasksApi.deleteTask(e.id)
      .subscribe(
        res => {
          console.log(res);
          this.taskList.splice(e.index, 1);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
          this.loadingSpinner.httpLoader.close();
        }
      )
  }

  openEditTask(index) {
    console.log('u trynna open task ' + index);

    this.editTask.openWindow(this.taskList[index], index);
  }

}
