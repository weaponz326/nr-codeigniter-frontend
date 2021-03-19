import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { BillsRoutingModule } from './bills-routing.module';

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BillTablesComponent } from './bill-tables/bill-tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    BillsWrapperComponent,
    AllBillsComponent,
    NewBillComponent,
    ViewBillComponent,
    BillTablesComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule
  ]
})
export class BillsModule { }
