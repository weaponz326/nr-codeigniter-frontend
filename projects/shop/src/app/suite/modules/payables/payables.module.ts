import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { PayablesRoutingModule } from './payables-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PayablesWrapperComponent } from './payables-wrapper/payables-wrapper.component';
import { AllPayablesComponent } from './all-payables/all-payables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddPayableComponent } from './add-payable/add-payable.component';
import { EditPayableComponent } from './edit-payable/edit-payable.component';
import { PayableFormComponent } from './payable-form/payable-form.component';


@NgModule({
  declarations: [
    PayablesWrapperComponent,
    AllPayablesComponent,
    DashboardComponent,
    SettingsComponent,
    AddPayableComponent,
    EditPayableComponent,
    PayableFormComponent],
  imports: [
    CommonModule,
    PayablesRoutingModule,
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
export class PayablesModule { }
