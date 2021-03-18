import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxDropDownList';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { TimetablesRoutingModule } from './timetables-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { TimetablesWrapperComponent } from './timetables-wrapper/timetables-wrapper.component';
import { AllTimetablesComponent } from './all-timetables/all-timetables.component';
import { FullTimetableComponent } from './full-timetable/full-timetable.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { NewTimetableComponent } from './new-timetable/new-timetable.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';


@NgModule({
  declarations: [
    TimetablesWrapperComponent,
    AllTimetablesComponent,
    FullTimetableComponent,
    ClassTimetableComponent,
    NewTimetableComponent,
    EditTimetableComponent,
  ],
  imports: [
    CommonModule,
    TimetablesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxWindowModule,
  ]
})
export class TimetablesModule { }
