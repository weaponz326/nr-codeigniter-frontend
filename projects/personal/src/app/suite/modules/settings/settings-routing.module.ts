import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  {
    path: "",
    component: SettingsWrapperComponent,
    children: [
      {
        path: "",
        component: ViewSettingsComponent,
        children: [
          { path: "", component: ProfileComponent },
          { path: "profile", component: ProfileComponent },
          { path: "general", component: GeneralComponent },
          { path: "security", component: SecurityComponent },
        ]
      },
      {
        path: "view-settings",
        component: ViewSettingsComponent,
        children: [
          { path: "", component: ProfileComponent },
          { path: "profile", component: ProfileComponent },
          { path: "general", component: GeneralComponent },
          { path: "security", component: SecurityComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
