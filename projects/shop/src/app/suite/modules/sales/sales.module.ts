import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { SalesRoutingModule } from './sales-routing.module';

import { SalesWrapperComponent } from './sales-wrapper/sales-wrapper.component';
import { AllSalesComponent } from './all-sales/all-sales.component';


@NgModule({
  declarations: [
    SalesWrapperComponent,
    AllSalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    jqxGridModule
  ]
})
export class SalesModule { }
