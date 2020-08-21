import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { LeaveRoutingModule } from './leave-routing.module';

import { LeaveWrapperComponent } from './leave-wrapper/leave-wrapper.component';
import { AllLeaveComponent } from './all-leave/all-leave.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';


@NgModule({
  declarations: [
    LeaveWrapperComponent,
    AllLeaveComponent,
    AddLeaveComponent,
    ViewLeaveComponent,
    LeaveFormComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class LeaveModule { }
