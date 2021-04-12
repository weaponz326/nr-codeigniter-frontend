import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { InventoryRoutingModule } from './inventory-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { InventoryWrapperComponent } from './inventory-wrapper/inventory-wrapper.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';


@NgModule({
  declarations: [
    InventoryWrapperComponent,
    AllInventoryComponent,
    DashboardComponent,
    SettingsComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    InventoryFormComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
    jqxWindowModule
  ]
})
export class InventoryModule { }
