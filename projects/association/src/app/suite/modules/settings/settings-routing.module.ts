import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BillingsComponent } from './billings/billings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SettingsWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "privacy", component: PrivacyComponent },
      { path: "billings", component: BillingsComponent },
      { path: "settings", component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
