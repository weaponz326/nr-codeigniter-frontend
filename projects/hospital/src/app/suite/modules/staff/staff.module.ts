import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { StaffRoutingModule } from './staff-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';


@NgModule({
  declarations: [
    StaffWrapperComponent,
    AllStaffComponent,
    NewStaffComponent,
    ViewStaffComponent,
    StaffFormComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    UtilitiesModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxPanelModule
  ]
})
export class StaffModule { }
