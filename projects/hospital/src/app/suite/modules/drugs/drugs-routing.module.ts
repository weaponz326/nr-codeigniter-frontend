import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugsWrapperComponent } from './drugs-wrapper/drugs-wrapper.component';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { NewDrugComponent } from './new-drug/new-drug.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';


const routes: Routes = [
  {
    path: "",
    component: DrugsWrapperComponent,
    children: [
      { path: "", component: AllDrugsComponent },
      { path: "all-drugs", component: AllDrugsComponent },
      { path: "new-drug", component: NewDrugComponent },
      { path: "view-drug", component: ViewDrugComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrugsRoutingModule { }
