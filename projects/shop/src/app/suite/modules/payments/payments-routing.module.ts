import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsWrapperComponent } from './payments-wrapper/payments-wrapper.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';


const routes: Routes = [
  {
    path: "",
    component: PaymentsWrapperComponent,
    children: [
      { path: "", component: AllPaymentsComponent },
      { path: "all-payments", component: AllPaymentsComponent },
      { path: "new-payment", component: NewPaymentComponent },
      { path: "view-payment", component: ViewPaymentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
