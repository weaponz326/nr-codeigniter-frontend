import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsWrapperComponent } from './doctors-wrapper/doctors-wrapper.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: DoctorsWrapperComponent,
    children: [
      { path: "", component: AllDoctorsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-doctors", component: AllDoctorsComponent },
      { path: "new-doctor", component: NewDoctorComponent },
      { path: "view-doctor", component: ViewDoctorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
