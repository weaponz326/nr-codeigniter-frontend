import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AdmissionsWrapperComponent } from './admissions-wrapper/admissions-wrapper.component';
import { AllAdmissionsComponent } from './all-admissions/all-admissions.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionActivitiesComponent } from './admission-activities/admission-activities.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AdmissionsWrapperComponent,
    AllAdmissionsComponent,
    NewAdmissionComponent,
    ViewAdmissionComponent,
    AdmissionFormComponent,
    AdmissionActivitiesComponent,
    SelectPatientComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule,
  ]
})
export class AdmissionsModule { }
