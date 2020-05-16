import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLeaveComponent } from './all-leave/all-leave.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { LeaveWrapperComponent } from './leave-wrapper/leave-wrapper.component';


const routes: Routes = [
  {
    path: "",
    component: LeaveWrapperComponent,
    children: [
      { path: "all_leave", component: AllLeaveComponent },
      { path: "add_leave", component: AddLeaveComponent },
      { path: "view_leave", component: ViewLeaveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
