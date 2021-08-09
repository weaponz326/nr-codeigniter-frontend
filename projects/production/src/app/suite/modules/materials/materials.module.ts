import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { MaterialsRoutingModule } from './materials-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { MaterialsWrapperComponent } from './materials-wrapper/materials-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { MaterialFormComponent } from './material-form/material-form.component';


@NgModule({
  declarations: [
    MaterialsWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllMaterialsComponent,
    AddMaterialComponent,
    ViewMaterialComponent,
    MaterialFormComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
    jqxTextAreaModule,
    jqxDropDownListModule
  ]
})
export class MaterialsModule { }
