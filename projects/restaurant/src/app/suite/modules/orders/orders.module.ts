import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    OrdersWrapperComponent, 
    AllOrdersComponent, 
    AddOrderComponent, ViewOrderComponent, OrderDetailsComponent, 
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule,
    jqxComboBoxModule
  ]
})
export class OrdersModule { }
