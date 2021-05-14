import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
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
      { path: "all-items", component: AllItemsComponent },
      { path: "add-item", component: AddItemComponent },
      { path: "view-item", component: EditItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
