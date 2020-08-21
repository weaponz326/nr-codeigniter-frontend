import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { ReceivablesRoutingModule } from './receivables-routing.module';

import { ReceivablesWrapperComponent } from './receivables-wrapper/receivables-wrapper.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';


@NgModule({
  declarations: [
    ReceivablesWrapperComponent,
    AllReceivablesComponent,
  ],
  imports: [
    CommonModule,
    ReceivablesRoutingModule,
    jqxGridModule
  ]
})
export class ReceivablesModule { }
