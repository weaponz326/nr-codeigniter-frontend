import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { DoctorsWrapperComponent } from './doctors-wrapper/doctors-wrapper.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';


@NgModule({
  declarations: [
    DoctorsWrapperComponent,
    NewDoctorComponent,
    ViewDoctorComponent,
    DoctorFormComponent,
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
    jqxPanelModule
  ]
})
export class DoctorsModule { }
