import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDispenseComponent } from './all-dispense/all-dispense.component';
import { DispensaryWrapperComponent } from './dispensary-wrapper/dispensary-wrapper.component';
import { NewDispenseComponent } from './new-dispense/new-dispense.component';
import { ViewDispenseComponent } from './view-dispense/view-dispense.component';

const routes: Routes = [
  {
    path: "",
    component: DispensaryWrapperComponent,
    children: [
      { path: "all-dispense", component: AllDispenseComponent },
      { path: "new-dispense", component: NewDispenseComponent },
      { path: "view-dispense", component: ViewDispenseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispensaryRoutingModule { }
