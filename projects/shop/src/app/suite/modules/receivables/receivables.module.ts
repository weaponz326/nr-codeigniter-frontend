import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { ReceivablesRoutingModule } from './receivables-routing.module';

import { ReceivablesWrapperComponent } from './receivables-wrapper/receivables-wrapper.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ReceivablesWrapperComponent,
    AllReceivablesComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    ReceivablesRoutingModule,
    jqxGridModule
  ]
})
export class ReceivablesModule { }
