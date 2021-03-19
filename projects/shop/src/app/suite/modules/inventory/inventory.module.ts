import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryWrapperComponent } from './inventory-wrapper/inventory-wrapper.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    InventoryWrapperComponent,
    AllInventoryComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    jqxGridModule
  ]
})
export class InventoryModule { }
