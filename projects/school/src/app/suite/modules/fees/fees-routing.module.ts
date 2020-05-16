import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesWrapperComponent } from './fees-wrapper/fees-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { StudentBillComponent } from './student-bill/student-bill.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { ViewFeesComponent } from './view-fees/view-fees.component';


const routes: Routes = [
  {
    path: "",
    component: FeesWrapperComponent,
    children: [
      { path: "all_bills", component: AllBillsComponent },
      { path: "student_bill", component: StudentBillComponent },
      { path: "all_fees", component: AllFeesComponent },
      { path: "view_fees", component: ViewFeesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }