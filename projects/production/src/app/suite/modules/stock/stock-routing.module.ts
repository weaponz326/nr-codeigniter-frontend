import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllStockComponent } from './all-stock/all-stock.component';


const routes: Routes = [
  {
    path: "",
    component: StockWrapperComponent,
    children: [
      { path: "", component: AllStockComponent }
      { path: "all-stock", component: AllStockComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
