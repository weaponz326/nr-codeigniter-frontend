import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesWrapperComponent } from './tables-wrapper/tables-wrapper.component';
import { AllTablesComponent } from './all-tables/all-tables.component';
import { AddTableComponent } from './add-table/add-table.component';
import { ViewTableComponent } from './view-table/view-table.component';


const routes: Routes = [
  {
    path: "",
    component: TablesWrapperComponent,
    children: [
      { path: "", component: AllTablesComponent },
      { path: "all-tables", component: AllTablesComponent },
      { path: "add-table", component: AddTableComponent },
      { path: "view-table", component: ViewTableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
