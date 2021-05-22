import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { ActionPlanRoutingModule } from './action-plan-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ActionPlanWrapperComponent } from './action-plan-wrapper/action-plan-wrapper.component';
import { AllPlansComponent } from './all-plans/all-plans.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { PlanStepsComponent } from './plan-steps/plan-steps.component';
import { AddStepComponent } from './add-step/add-step.component';
import { EditStepComponent } from './edit-step/edit-step.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ActionPlanWrapperComponent,
    AllPlansComponent,
    AddPlanComponent,
    ViewPlanComponent,
    PlanStepsComponent,
    AddStepComponent,
    EditStepComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ActionPlanRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxWindowModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxNumberInputModule,
    jqxTextAreaModule
  ]
})
export class ActionPlanModule { }
