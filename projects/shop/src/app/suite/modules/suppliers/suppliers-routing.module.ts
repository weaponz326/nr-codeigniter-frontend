import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuppliersComponent } from './all-suppliers/all-suppliers.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { SuppliersWrapperComponent } from './suppliers-wrapper/suppliers-wrapper.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SuppliersWrapperComponent,
    children: [
      { path: "", component: AllSuppliersComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-suppliers", component: AllSuppliersComponent },
      { path: "new-supplier", component: NewSupplierComponent },
      { path: "view-supplier", component: ViewSupplierComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
