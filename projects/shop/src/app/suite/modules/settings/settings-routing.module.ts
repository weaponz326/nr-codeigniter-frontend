import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BillingsComponent } from './billings/billings.component';


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
          { path: "billings", component: BillingsComponent },
        ]
      },
      {
        path: "view-settings",
        component: ViewSettingsComponent,
        children: [
          { path: "", component: ProfileComponent },
          { path: "profile", component: ProfileComponent },
          { path: "general", component: GeneralComponent },
          { path: "privacy", component: PrivacyComponent },
          { path: "billings", component: BillingsComponent },
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
