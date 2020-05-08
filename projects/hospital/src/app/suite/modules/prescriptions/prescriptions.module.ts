import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { PrescriptionsWrapperComponent } from './prescriptions-wrapper/prescriptions-wrapper.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';


@NgModule({
  declarations: [
    PrescriptionsWrapperComponent,
    AllPrescriptionsComponent,
    AddPrescriptionComponent,
    ViewPrescriptionComponent,
    PrescriptionDetailsComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule
  ]
})
export class PrescriptionsModule { }
