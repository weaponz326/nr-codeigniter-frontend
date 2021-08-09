import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { EquipmentWrapperComponent } from './equipment-wrapper/equipment-wrapper.component';
import { AllEquipmentComponent } from './all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    EquipmentWrapperComponent,
    AllEquipmentComponent,
    AddEquipmentComponent,
    ViewEquipmentComponent,
    EquipmentFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class EquipmentModule { }
