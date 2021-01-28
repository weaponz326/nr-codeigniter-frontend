import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { PaymentsWrapperComponent } from './payments-wrapper/payments-wrapper.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { SelectBillComponent } from './select-bill/select-bill.component';
import { SelectAdmissionComponent } from './select-admission/select-admission.component';


@NgModule({
  declarations: [
    PaymentsWrapperComponent,
    AllPaymentsComponent,
    NewPaymentComponent,
    ViewPaymentComponent,
    PaymentFormComponent,
    SelectPatientComponent,
    SelectBillComponent,
    SelectAdmissionComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxNumberInputModule,
    jqxWindowModule
  ]
})
export class PaymentsModule { }
