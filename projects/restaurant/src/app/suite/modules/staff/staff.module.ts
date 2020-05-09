import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { AllStaffComponent } from './all-staff/all-staff.component';
import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';


@NgModule({
  declarations: [
    AllStaffComponent, 
    StaffWrapperComponent, 
    NewStaffComponent, 
    ViewStaffComponent, 
    StaffFormComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule
  ]
})
export class StaffModule { }
