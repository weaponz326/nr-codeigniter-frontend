import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AttendanceWrapperComponent } from './attendance-wrapper/attendance-wrapper.component';
import { AllAttendanceComponent } from './all-attendance/all-attendance.component';
import { NewAttendanceComponent } from './new-attendance/new-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { CheckSheetComponent } from './check-sheet/check-sheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AttendanceWrapperComponent,
    AllAttendanceComponent,
    NewAttendanceComponent,
    ViewAttendanceComponent,
    ViewSheetComponent,
    CheckAttendanceComponent,
    CheckSheetComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule
  ]
})
export class AttendanceModule { }
