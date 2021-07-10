import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { DuesRoutingModule } from './dues-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DuesWrapperComponent } from './dues-wrapper/dues-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDuesComponent } from './all-dues/all-dues.component';
import { CreateDuesComponent } from './create-dues/create-dues.component';
import { ViewDuesComponent } from './view-dues/view-dues.component';
import { DuesPaymentsComponent } from './dues-payments/dues-payments.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { DuesFormComponent } from './dues-form/dues-form.component';


@NgModule({
  declarations: [
    DuesWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllDuesComponent,
    CreateDuesComponent,
    ViewDuesComponent,
    DuesPaymentsComponent,
    AddPaymentComponent,
    DuesFormComponent
  ],
  imports: [
    CommonModule,
    DuesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxNumberInputModule,
    jqxWindowModule,
  ]
})
export class DuesModule { }
