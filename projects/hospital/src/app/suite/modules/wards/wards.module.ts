import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { WardsRoutingModule } from './wards-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { WardsWrapperComponent } from './wards-wrapper/wards-wrapper.component';
import { AllWardsComponent } from './all-wards/all-wards.component';
import { NewWardComponent } from './new-ward/new-ward.component';
import { ViewWardComponent } from './view-ward/view-ward.component';
import { WardFormComponent } from './ward-form/ward-form.component';
import { WardPatientsComponent } from './ward-patients/ward-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';


@NgModule({
  declarations: [
    WardsWrapperComponent,
    AllWardsComponent,
    NewWardComponent,
    ViewWardComponent,
    WardFormComponent,
    WardPatientsComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientFormComponent,
    SelectPatientComponent
  ],
  imports: [
    CommonModule,
    WardsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
    jqxNumberInputModule,
    jqxTextAreaModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class WardsModule { }
