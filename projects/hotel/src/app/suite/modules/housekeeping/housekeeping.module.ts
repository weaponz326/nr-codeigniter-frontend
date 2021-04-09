import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { HousekeepingRoutingModule } from './housekeeping-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { HousekeepingWrapperComponent } from './housekeeping-wrapper/housekeeping-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllHousekeepingComponent } from './all-housekeeping/all-housekeeping.component';
import { NewHousekeepingComponent } from './new-housekeeping/new-housekeeping.component';
import { ViewHousekeepingComponent } from './view-housekeeping/view-housekeeping.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { EditChecklistComponent } from './edit-checklist/edit-checklist.component';


@NgModule({
  declarations: [
    HousekeepingWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllHousekeepingComponent,
    NewHousekeepingComponent,
    ViewHousekeepingComponent,
    ChecklistComponent,
    AddChecklistComponent,
    EditChecklistComponent],
  imports: [
    CommonModule,
    HousekeepingRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxWindowModule,
  ]
})
export class HousekeepingModule { }
