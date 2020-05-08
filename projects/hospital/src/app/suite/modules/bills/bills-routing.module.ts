import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { ViewBillComponent } from './view-bill/view-bill.component';


const routes: Routes = [
  {
    path: "",
    component: BillsWrapperComponent,
    children: [
      { path: "all_bills", component: AllBillsComponent },
      { path: "view_bill", component: ViewBillComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
