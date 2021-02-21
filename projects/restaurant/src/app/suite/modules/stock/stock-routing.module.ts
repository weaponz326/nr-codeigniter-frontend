import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: StockWrapperComponent,
    children: [
      { path: "", component: AllItemsComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "all-items", component: AllItemsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
