import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ProcurementWrapperComponent } from './procurement-wrapper/procurement-wrapper.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewProcurementComponent } from './new-procurement/new-procurement.component';
import { ViewProcurementComponent } from './view-procurement/view-procurement.component';
import { ProcurementFormComponent } from './procurement-form/procurement-form.component';


@NgModule({
  declarations: [
    ProcurementWrapperComponent,
    AllProcurementComponent,
    OrderReviewComponent,
    DashboardComponent,
    SettingsComponent,
    NewProcurementComponent,
    ViewProcurementComponent,
    ProcurementFormComponent
  ],
  imports: [
    CommonModule,
    ProcurementRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
    jqxTextAreaModule
  ]
})
export class ProcurementModule { }
