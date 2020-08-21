import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [
    CustomersWrapperComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxTextAreaModule
  ]
})
export class CustomersModule { }
