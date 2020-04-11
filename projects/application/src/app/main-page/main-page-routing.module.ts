// contains only one route (main-wrapper) which is also lazy loaded in the app router

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';


const routes: Routes = [
  { path: "", component: MainWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
