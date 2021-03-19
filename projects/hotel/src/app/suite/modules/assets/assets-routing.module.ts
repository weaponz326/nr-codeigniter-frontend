import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsWrapperComponent } from './assets-wrapper/assets-wrapper.component';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: AssetsWrapperComponent,
    children: [
      { path: "", component: AllAssetsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-assets", component: AllAssetsComponent },
      { path: "add-asset", component: AddAssetComponent },
      { path: "view-asset", component: ViewAssetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
