import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

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
import { SelectGuestComponent } from './select-guest/select-guest.component';
import { AddServiceItemComponent } from './add-service-item/add-service-item.component';
import { EditServiceItemComponent } from './edit-service-item/edit-service-item.component';


@NgModule({
  declarations: [
    ServicesWrapperComponent,
    AllServicesComponent,
    ServicesDetailsComponent,
    ViewServicesComponent,
    AddServicesComponent,
    DashboardComponent,
    SettingsComponent,
    SelectGuestComponent,
    AddServiceItemComponent,
    EditServiceItemComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule,
  ]
})
export class ServicesModule { }
