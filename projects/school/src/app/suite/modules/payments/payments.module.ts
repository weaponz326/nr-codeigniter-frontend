import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PaymentsWrapperComponent } from './payments-wrapper/payments-wrapper.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectStudentComponent } from './select-student/select-student.component';
import { SelectBillComponent } from './select-bill/select-bill.component';


@NgModule({
  declarations: [
    PaymentsWrapperComponent,
    AllPaymentsComponent,
    NewPaymentComponent,
    ViewPaymentComponent,
    DashboardComponent,
    SettingsComponent,
    SelectStudentComponent,
    SelectBillComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxWindowModule
  ]
})
export class PaymentsModule { }
