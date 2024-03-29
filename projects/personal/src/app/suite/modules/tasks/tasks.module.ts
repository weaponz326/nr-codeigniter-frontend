import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban'
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'
import { jqxInputModule } from 'jqwidgets-ng/jqxinput'
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput'
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

import { TasksRoutingModule } from './tasks-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    TasksWrapperComponent,
    AllTasksComponent,
    KanbanViewComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxKanbanModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxGridModule,
    jqxWindowModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxCheckBoxModule,
  ]
})
export class TasksModule { }
