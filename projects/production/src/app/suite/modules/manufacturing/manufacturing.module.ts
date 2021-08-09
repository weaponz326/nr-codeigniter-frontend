import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper/manufacturing-wrapper.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewManufacturingComponent } from './new-manufacturing/new-manufacturing.component';
import { ViewManufacturingComponent } from './view-manufacturing/view-manufacturing.component';
import { ManufacturingFormComponent } from './manufacturing-form/manufacturing-form.component';


@NgModule({
  declarations: [
    ManufacturingWrapperComponent,
    AllManufacturingComponent,
    DashboardComponent,
    SettingsComponent,
    NewManufacturingComponent,
    ViewManufacturingComponent,
    ManufacturingFormComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class ManufacturingModule { }
