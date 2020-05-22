import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path: "",
    component: ProductsWrapperComponent,
    children: [
      { path: "all_products", component: AllProductsComponent },
      { path: "new_product", component: NewProductComponent },
      { path: "view_product", component: ViewProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
