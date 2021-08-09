import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DoctorsWrapperComponent } from './doctors-wrapper/doctors-wrapper.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DoctorsWrapperComponent,
    NewDoctorComponent,
    ViewDoctorComponent,
    DoctorFormComponent,
    AllDoctorsComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
    jqxPanelModule,
    jqxComboBoxModule
  ]
})
export class DoctorsModule { }
