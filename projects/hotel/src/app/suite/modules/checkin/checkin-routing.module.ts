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
      { path: "", component: AllCheckinComponent },
      { path: "all-checkin", component: AllCheckinComponent },
      { path: "new-checkin", component: NewCheckinComponent },
      { path: "view-checkin", component: ViewCheckinComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinRoutingModule { }
