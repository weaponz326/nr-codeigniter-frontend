import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesWrapperComponent } from './fees-wrapper/fees-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { StudentBillComponent } from './student-bill/student-bill.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { CreateFeesComponent } from './create-fees/create-fees.component';
import { ViewFeesComponent } from './view-fees/view-fees.component';


const routes: Routes = [
  {
    path: "",
    component: FeesWrapperComponent,
    children: [
      { path: "", component: AllBillsComponent },
      { path: "all-bills", component: AllBillsComponent },
      { path: "student-bill", component: StudentBillComponent },
      { path: "all-fees", component: AllFeesComponent },
      { path: "create-fees", component: CreateFeesComponent },
      { path: "view-fees", component: ViewFeesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
