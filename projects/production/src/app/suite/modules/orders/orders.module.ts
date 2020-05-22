import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';


@NgModule({
  declarations: [
    OrdersWrapperComponent, 
    AllOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    jqxGridModule
  ]
})
export class OrdersModule { }
