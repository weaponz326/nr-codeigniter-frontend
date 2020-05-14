import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinWrapperComponent } from './checkin-wrapper/checkin-wrapper.component';
import { AllCheckinComponent } from './all-checkin/all-checkin.component';
import { NewCheckinComponent } from './new-checkin/new-checkin.component';
import { ViewCheckinComponent } from './view-checkin/view-checkin.component';


const routes: Routes = [
  {
    path: "",
    component: CheckinWrapperComponent,
    children: [
      { path: "all_checkin", component: AllCheckinComponent },
      { path: "new_checkin", component: NewCheckinComponent },
      { path: "view_checkin", component: ViewCheckinComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinRoutingModule { }
