import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesWrapperComponent } from './services-wrapper/services-wrapper.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { ViewServicesComponent } from './view-services/view-services.component';


const routes: Routes = [
  {
    path: "",
    component: ServicesWrapperComponent,
    children: [
      { path: "all_services", component: AllServicesComponent },
      { path: "view_services", component: ViewServicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
