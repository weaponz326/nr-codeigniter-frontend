import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper/manufacturing-wrapper.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ManufacturingWrapperComponent,
    AllManufacturingComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    jqxGridModule
  ]
})
export class ManufacturingModule { }
