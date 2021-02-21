import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { SittingsRoutingModule } from './sittings-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SittingsWrapperComponent } from './sittings-wrapper/sittings-wrapper.component';
import { AllSittingsComponent } from './all-sittings/all-sittings.component';
import { NewSittingComponent } from './new-sitting/new-sitting.component';
import { ViewSittingComponent } from './view-sitting/view-sitting.component';
import { SittingFormComponent } from './sitting-form/sitting-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    SittingsWrapperComponent,
    AllSittingsComponent,
    NewSittingComponent,
    ViewSittingComponent,
    SittingFormComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SittingsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxWindowModule
  ]
})
export class SittingsModule { }
