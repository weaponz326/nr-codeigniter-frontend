import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsWrapperComponent } from './assets-wrapper/assets-wrapper.component';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';


const routes: Routes = [
  {
    path: "",
    component: AssetsWrapperComponent,
    children: [
      { path: "all_assets", component: AllAssetsComponent },
      { path: "add_asset", component: AddAssetComponent },
      { path: "view_asset", component: ViewAssetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
