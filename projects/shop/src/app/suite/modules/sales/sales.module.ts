import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { SalesRoutingModule } from './sales-routing.module';

import { SalesWrapperComponent } from './sales-wrapper/sales-wrapper.component';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    SalesWrapperComponent,
    AllSalesComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    jqxGridModule
  ]
})
export class SalesModule { }
