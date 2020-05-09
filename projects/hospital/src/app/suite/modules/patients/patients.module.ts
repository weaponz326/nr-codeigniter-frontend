import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea'
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { PatientsWrapperComponent } from './patients-wrapper/patients-wrapper.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { NewPatientComponent } from './new-patient/new-patient.component';


@NgModule({
  declarations: [
    PatientsWrapperComponent, 
    AllPatientsComponent, 
    ViewPatientComponent, 
    PatientFormComponent, 
    NewPatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    jqxInputModule,
    jqxRadioButtonModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
    jqxButtonModule,
    jqxGridModule,
    jqxComboBoxModule
  ]
})
export class PatientsModule { }
