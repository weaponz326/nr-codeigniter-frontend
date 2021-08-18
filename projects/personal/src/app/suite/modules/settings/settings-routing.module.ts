import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  {
    path: "",
    component: SettingsWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "general", component: GeneralComponent },
      { path: "profile", component: ProfileComponent },
      { path: "security", component: SecurityComponent },
      { path: "settings", component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
