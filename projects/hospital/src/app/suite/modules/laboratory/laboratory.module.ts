import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { LaboratoryWrapperComponent } from './laboratory-wrapper/laboratory-wrapper.component';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { NewLabComponent } from './new-lab/new-lab.component';
import { ViewLabComponent } from './view-lab/view-lab.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { SelectDoctorComponent } from './select-doctor/select-doctor.component';


@NgModule({
  declarations: [
    LaboratoryWrapperComponent,
    AllLabsComponent,
    NewLabComponent,
    ViewLabComponent,
    SelectPatientComponent,
    SelectDoctorComponent,
  ],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule,
    jqxFileUploadModule
  ]
})
export class LaboratoryModule { }
