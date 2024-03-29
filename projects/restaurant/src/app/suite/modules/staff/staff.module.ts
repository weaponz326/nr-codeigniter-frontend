import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { StaffRoutingModule } from './staff-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AllStaffComponent } from './all-staff/all-staff.component';
import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AllStaffComponent,
    StaffWrapperComponent,
    NewStaffComponent,
    ViewStaffComponent,
    StaffFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxComboBoxModule,
    jqxPanelModule,
  ]
})
export class StaffModule { }
