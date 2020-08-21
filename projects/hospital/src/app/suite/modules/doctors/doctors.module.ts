import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { DoctorsRoutingModule } from './doctors-routing.module';

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
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxRadioButtonModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule
  ]
})
export class DoctorsModule { }
