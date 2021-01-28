import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { PrescriptionsWrapperComponent } from './prescriptions-wrapper/prescriptions-wrapper.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { SelectDoctorComponent } from './select-doctor/select-doctor.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { DetailFormComponent } from './detail-form/detail-form.component';


@NgModule({
  declarations: [
    PrescriptionsWrapperComponent,
    AllPrescriptionsComponent,
    AddPrescriptionComponent,
    ViewPrescriptionComponent,
    PrescriptionDetailsComponent,
    SelectPatientComponent,
    SelectDoctorComponent,
    AddDetailComponent,
    EditDetailComponent,
    DetailFormComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
  ]
})
export class PrescriptionsModule { }
