import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceWrapperComponent } from './attendance-wrapper/attendance-wrapper.component';
import { AllAttendanceComponent } from './all-attendance/all-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';


const routes: Routes = [
  {
    path: "",
    component: AttendanceWrapperComponent,
    children: [
      { path: "all_attendance", component: AllAttendanceComponent },
      { path: "view_attendance", component: ViewAttendanceComponent },
      { path: "check_attendance", component: CheckAttendanceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
