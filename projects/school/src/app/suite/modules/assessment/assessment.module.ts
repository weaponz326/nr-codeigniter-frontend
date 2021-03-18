import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

import { AssessmentRoutingModule } from './assessment-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AssessmentWrapperComponent } from './assessment-wrapper/assessment-wrapper.component';
import { AllAssessmentComponent } from './all-assessment/all-assessment.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { AssessmentTableComponent } from './assessment-table/assessment-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { SelectTermComponent } from './select-term/select-term.component';
import { SelectSubjectComponent } from './select-subject/select-subject.component';
import { SelectClassComponent } from './select-class/select-class.component';


@NgModule({
  declarations: [
    AssessmentWrapperComponent,
    AllAssessmentComponent,
    NewAssessmentComponent,
    ViewAssessmentComponent,
    AssessmentTableComponent,
    DashboardComponent,
    SettingsComponent,
    AssessmentFormComponent,
    SelectTermComponent,
    SelectSubjectComponent,
    SelectClassComponent,
  ],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxListBoxModule,
  ]
})
export class AssessmentModule { }
