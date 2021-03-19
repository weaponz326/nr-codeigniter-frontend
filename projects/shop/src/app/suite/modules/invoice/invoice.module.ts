import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { InvoiceRoutingModule } from './invoice-routing.module';

import { InvoiceWrapperComponent } from './invoice-wrapper/invoice-wrapper.component';
import { AllInvoiceComponent } from './all-invoice/all-invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    InvoiceWrapperComponent,
    AllInvoiceComponent,
    NewInvoiceComponent,
    ViewInvoiceComponent,
    InvoiceTableComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class InvoiceModule { }
