import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { CustomersRoutingModule } from './customers-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { CustomersWrapperComponent } from './customers-wrapper/customers-wrapper.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [
    CustomersWrapperComponent,
    AllCustomersComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxTextAreaModule,
    jqxDropDownListModule,
    jqxPanelModule,
    jqxComboBoxModule,
  ]
})
export class CustomersModule { }
