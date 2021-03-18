import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

import { ReportsRoutingModule } from './reports-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { ClassSheetComponent } from './class-sheet/class-sheet.component';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { StudentSheetComponent } from './student-sheet/student-sheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectTermComponent } from './select-term/select-term.component';
import { SelectClassComponent } from './select-class/select-class.component';


@NgModule({
  declarations: [
    ReportsWrapperComponent,
    AllReportsComponent,
    NewReportComponent,
    ClassReportComponent,
    ClassSheetComponent,
    AddAssessmentComponent,
    StudentReportComponent,
    StudentSheetComponent,
    DashboardComponent,
    SettingsComponent,
    SelectTermComponent,
    SelectClassComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxGridModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxListBoxModule
  ]
})
export class ReportsModule { }
