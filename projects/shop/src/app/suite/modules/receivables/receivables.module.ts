import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { ReceivablesRoutingModule } from './receivables-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ReceivablesWrapperComponent } from './receivables-wrapper/receivables-wrapper.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddReceivableComponent } from './add-receivable/add-receivable.component';
import { EditReceivableComponent } from './edit-receivable/edit-receivable.component';
import { ReceivableFormComponent } from './receivable-form/receivable-form.component';


@NgModule({
  declarations: [
    ReceivablesWrapperComponent,
    AllReceivablesComponent,
    DashboardComponent,
    SettingsComponent,
    AddReceivableComponent,
    EditReceivableComponent,
    ReceivableFormComponent,
  ],
  imports: [
    CommonModule,
    ReceivablesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class ReceivablesModule { }
