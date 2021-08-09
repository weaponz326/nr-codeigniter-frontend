import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxDropDownList';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { SelectSubjectComponent } from './select-subject/select-subject.component';


@NgModule({
  declarations: [
    TimetablesWrapperComponent,
    AllTimetablesComponent,
    FullTimetableComponent,
    ClassTimetableComponent,
    NewTimetableComponent,
    EditTimetableComponent,
    DashboardComponent,
    SettingsComponent,
    SelectClassComponent,
    AddPeriodComponent,
    SelectSubjectComponent,
  ],
  imports: [
    CommonModule,
    TimetablesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxListBoxModule,
    jqxWindowModule,
  ]
})
export class TimetablesModule { }
