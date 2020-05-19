import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceWrapperComponent } from './invoice-wrapper/invoice-wrapper.component';
import { AllInvoiceComponent } from './all-invoice/all-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';


const routes: Routes = [
  {
    path: "",
    component: InvoiceWrapperComponent,
    children: [
      { path: "all_invoice", component: AllInvoiceComponent },
      { path: "view_invoice", component: ViewInvoiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
