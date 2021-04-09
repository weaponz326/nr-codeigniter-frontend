import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesWrapperComponent } from './services-wrapper/services-wrapper.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ServicesWrapperComponent,
    AllServicesComponent,
    ServicesDetailsComponent,
    ViewServicesComponent,
    AddServicesComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule
  ]
})
export class ServicesModule { }
