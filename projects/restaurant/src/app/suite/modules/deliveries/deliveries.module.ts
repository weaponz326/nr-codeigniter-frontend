import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { DeliveriesWrapperComponent } from './deliveries-wrapper/deliveries-wrapper.component';
import { AllDeliveriesComponent } from './all-deliveries/all-deliveries.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';


@NgModule({
  declarations: [
    DeliveriesWrapperComponent, 
    AllDeliveriesComponent, 
    NewDeliveryComponent, 
    EditDeliveryComponent, 
    DeliveryFormComponent, 
  ],
  imports: [
    CommonModule,
    DeliveriesRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule
  ]
})
export class DeliveriesModule { }
