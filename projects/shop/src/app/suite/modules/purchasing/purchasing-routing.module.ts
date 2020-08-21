import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasingWrapperComponent } from './purchasing-wrapper/purchasing-wrapper.component';
import { AllPurchasingComponent } from './all-purchasing/all-purchasing.component';
import { ViewPurchasingComponent } from './view-purchasing/view-purchasing.component';


const routes: Routes = [
  {
    path: "",
    component: PurchasingWrapperComponent,
    children: [
      { path: "", component: AllPurchasingComponent },
      { path: "all-purchasing", component: AllPurchasingComponent },
      { path: "view-purchasing", component: ViewPurchasingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }
