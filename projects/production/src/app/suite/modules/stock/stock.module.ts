import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { StockRoutingModule } from './stock-routing.module';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllStockComponent } from './all-stock/all-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    StockWrapperComponent,
    AllStockComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    jqxGridModule
  ]
})
export class StockModule { }
