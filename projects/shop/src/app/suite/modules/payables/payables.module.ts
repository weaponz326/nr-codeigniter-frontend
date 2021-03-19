import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { PayablesRoutingModule } from './payables-routing.module';

import { PayablesWrapperComponent } from './payables-wrapper/payables-wrapper.component';
import { AllPayablesComponent } from './all-payables/all-payables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    PayablesWrapperComponent,
    AllPayablesComponent,
    DashboardComponent,
    SettingsComponent],
  imports: [
    CommonModule,
    PayablesRoutingModule,
    jqxGridModule
  ]
})
export class PayablesModule { }
