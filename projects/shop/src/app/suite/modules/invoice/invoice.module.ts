import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { InvoiceWrapperComponent } from './invoice-wrapper/invoice-wrapper.component';
import { AllInvoiceComponent } from './all-invoice/all-invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { SelectProductComponent } from './select-product/select-product.component';


@NgModule({
  declarations: [
    InvoiceWrapperComponent,
    AllInvoiceComponent,
    NewInvoiceComponent,
    ViewInvoiceComponent,
    InvoiceTableComponent,
    DashboardComponent,
    SettingsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent,
    SelectProductComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class InvoiceModule { }
