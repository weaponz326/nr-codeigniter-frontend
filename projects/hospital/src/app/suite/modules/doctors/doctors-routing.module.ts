import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsWrapperComponent } from './doctors-wrapper/doctors-wrapper.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';


const routes: Routes = [
  {
    path: "",
    component: DoctorsWrapperComponent,
    children: [
      { path: "all_doctors", component: AllDoctorsComponent },
      { path: "new_doctor", component: NewDoctorComponent },
      { path: "view_doctor", component: ViewDoctorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
