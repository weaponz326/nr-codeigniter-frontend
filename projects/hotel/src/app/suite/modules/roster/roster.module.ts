import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { RosterRoutingModule } from './roster-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { RosterWrapperComponent } from './roster-wrapper/roster-wrapper.component';
import { AllRostersComponent } from './all-rosters/all-rosters.component';
import { NewRosterComponent } from './new-roster/new-roster.component';
import { ViewRosterComponent } from './view-roster/view-roster.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { RosterSheetComponent } from './roster-sheet/roster-sheet.component';
import { ManageBatchesComponent } from './manage-batches/manage-batches.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import { ManagePersonnelComponent } from './manage-personnel/manage-personnel.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { ShiftsComponent } from './shifts/shifts.component';


@NgModule({
  declarations: [
    RosterWrapperComponent,
    AllRostersComponent,
    NewRosterComponent,
    ViewRosterComponent,
    DashboardComponent,
    SettingsComponent,
    AddShiftComponent,
    EditShiftComponent,
    RosterSheetComponent,
    ManageBatchesComponent,
    AddBatchComponent,
    EditBatchComponent,
    ManagePersonnelComponent,
    EditPersonnelComponent,
    ShiftsComponent
  ],
  imports: [
    CommonModule,
    RosterRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
  ]
})
export class RosterModule { }
