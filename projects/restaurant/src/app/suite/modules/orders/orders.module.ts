import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { OrdersRoutingModule } from './orders-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectMenuItemComponent } from './select-menu-item/select-menu-item.component';


@NgModule({
  declarations: [
    OrdersWrapperComponent,
    AllOrdersComponent,
    AddOrderComponent,
    ViewOrderComponent,
    OrderDetailsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent,
    DashboardComponent,
    SettingsComponent,
    SelectMenuItemComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    UtilitiesModule,
    ChartsModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule,
    jqxComboBoxModule,
    jqxNumberInputModule,
  ]
})
export class OrdersModule { }
