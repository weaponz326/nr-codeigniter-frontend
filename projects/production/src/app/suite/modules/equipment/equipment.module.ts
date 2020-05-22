import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { EquipmentWrapperComponent } from './equipment-wrapper/equipment-wrapper.component';
import { AllEquipmentComponent } from './all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';


@NgModule({
  declarations: [
    EquipmentWrapperComponent, 
    AllEquipmentComponent, 
    AddEquipmentComponent, 
    ViewEquipmentComponent, 
    EquipmentFormComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class EquipmentModule { }
