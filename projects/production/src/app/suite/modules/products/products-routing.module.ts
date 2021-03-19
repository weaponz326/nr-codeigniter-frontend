import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ProductsWrapperComponent,
    children: [
      { path: "", component: AllProductsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-products", component: AllProductsComponent },
      { path: "new-product", component: NewProductComponent },
      { path: "view-product", component: ViewProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
