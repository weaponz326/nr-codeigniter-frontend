import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { PlanningWrapperComponent } from './planning-wrapper/planning-wrapper.component';
import { AllPlanningComponent } from './all-planning/all-planning.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { PlanKanbanComponent } from './plan-kanban/plan-kanban.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [
    PlanningWrapperComponent, 
    AllPlanningComponent, 
    NewPlanComponent, 
    ViewPlanComponent, 
    PlanKanbanComponent, 
    AddTaskComponent, 
    EditTaskComponent, 
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxKanbanModule,
    jqxTextAreaModule
  ]
})
export class PlanningModule { }
