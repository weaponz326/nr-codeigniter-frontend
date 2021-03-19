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

import { ProcurementWrapperComponent } from './procurement-wrapper/procurement-wrapper.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ProcurementWrapperComponent,
    AllProcurementComponent,
    NewOrderComponent,
    ViewOrderComponent,
    OrderFormComponent,
    OrderReviewComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ProcurementRoutingModule,
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
