import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { AttendanceWrapperComponent } from './attendance-wrapper/attendance-wrapper.component';
import { AllAttendanceComponent } from './all-attendance/all-attendance.component';
import { NewAttendanceComponent } from './new-attendance/new-attendance.component';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';
import { CheckSheetComponent } from './check-sheet/check-sheet.component';


@NgModule({
  declarations: [
    AttendanceWrapperComponent, 
    AllAttendanceComponent, 
    NewAttendanceComponent,
    ViewAttendanceComponent, 
    CheckAttendanceComponent, ViewSheetComponent, CheckSheetComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxDropDownListModule,
    jqxInputModule,
    jqxDateTimeInputModule
  ]
})
export class AttendanceModule { }
