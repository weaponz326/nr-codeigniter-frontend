import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { AppointmentsWrapperComponent } from './appointments-wrapper/appointments-wrapper.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';


@NgModule({
  declarations: [
    AppointmentsWrapperComponent, 
    AllAppointmentsComponent, 
    AddAppointmentComponent, 
    EditAppointmentComponent, 
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
    jqxWindowModule
  ]
})
export class AppointmentsModule { }
