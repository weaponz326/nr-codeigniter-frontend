import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckinRoutingModule } from './checkin-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { CheckinWrapperComponent } from './checkin-wrapper/checkin-wrapper.component';
import { AllCheckinComponent } from './all-checkin/all-checkin.component';
import { NewCheckinComponent } from './new-checkin/new-checkin.component';
import { ViewCheckinComponent } from './view-checkin/view-checkin.component';
import { CheckinFormComponent } from './checkin-form/checkin-form.component';


@NgModule({
  declarations: [
    CheckinWrapperComponent, 
    AllCheckinComponent, 
    NewCheckinComponent, 
    ViewCheckinComponent, 
    CheckinFormComponent
  ],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule
  ]
})
export class CheckinModule { }
