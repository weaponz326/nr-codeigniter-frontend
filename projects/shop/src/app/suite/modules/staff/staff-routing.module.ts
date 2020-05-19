import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';


const routes: Routes = [
  {
    path: "",
    component: StaffWrapperComponent,
    children: [
      { path: "all_staff", component: AllStaffComponent },
      { path: "new_staff", component: NewStaffComponent },
      { path: "view_staff", component: ViewStaffComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
