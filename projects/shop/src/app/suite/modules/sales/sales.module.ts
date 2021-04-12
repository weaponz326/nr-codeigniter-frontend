import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { SalesRoutingModule } from './sales-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SalesWrapperComponent } from './sales-wrapper/sales-wrapper.component';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';


@NgModule({
  declarations: [
    SalesWrapperComponent,
    AllSalesComponent,
    DashboardComponent,
    SettingsComponent,
    SalesFormComponent,
    AddSalesComponent,
    EditSalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class SalesModule { }
