import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea'
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { PatientsRoutingModule } from './patients-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PatientsWrapperComponent } from './patients-wrapper/patients-wrapper.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    PatientsWrapperComponent,
    AllPatientsComponent,
    ViewPatientComponent,
    PatientFormComponent,
    NewPatientComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
    jqxButtonModule,
    jqxGridModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxPanelModule
  ]
})
export class PatientsModule { }
