import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsWrapperComponent } from './appointments-wrapper/appointments-wrapper.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';


const routes: Routes = [
  {
    path: "", 
    component: AppointmentsWrapperComponent,
    children: [
      { path: "", component: AllAppointmentsComponent }
      { path: "all-appointments", component: AllAppointmentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
