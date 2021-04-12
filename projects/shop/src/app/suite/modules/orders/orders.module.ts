import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { OrdersRoutingModule } from './orders-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    OrdersWrapperComponent,
    AllOrdersComponent,
    AddOrderComponent,
    ViewOrderComponent,
    OrderDetailsComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule
  ]
})
export class OrdersModule { }
