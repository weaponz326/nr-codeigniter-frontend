import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllStockComponent } from './all-stock/all-stock.component';


@NgModule({
  declarations: [
    StockWrapperComponent, 
    AllStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    jqxGridModule
  ]
})
export class StockModule { }
