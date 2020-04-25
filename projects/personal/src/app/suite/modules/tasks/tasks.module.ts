import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban'
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'
import { jqxInputModule } from 'jqwidgets-ng/jqxinput'
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput'
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'

import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';

@NgModule({
  declarations: [
    TasksWrapperComponent, 
    AllTasksComponent,
    KanbanViewComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    jqxKanbanModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxGridModule    
  ]
})
export class TasksModule { }
