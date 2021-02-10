import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllItemsComponent } from './all-items/all-items.component';


const routes: Routes = [
  {
    path: "",
    component: StockWrapperComponent,
    children: [
      { path: "", component: AllItemsComponent },
      { path: "all-items", component: AllItemsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
