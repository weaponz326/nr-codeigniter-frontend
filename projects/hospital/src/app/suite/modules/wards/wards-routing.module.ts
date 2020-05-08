import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WardsWrapperComponent } from './wards-wrapper/wards-wrapper.component';

import { AllWardsComponent } from './all-wards/all-wards.component';
import { NewWardComponent } from './new-ward/new-ward.component';
import { ViewWardComponent } from './view-ward/view-ward.component';


const routes: Routes = [
  {
    path: "",
    component: WardsWrapperComponent,
    children: [
      { path: "all_wards", component: AllWardsComponent },
      { path: "new_ward", component: NewWardComponent },
      { path: "view_ward", component: ViewWardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WardsRoutingModule { }
