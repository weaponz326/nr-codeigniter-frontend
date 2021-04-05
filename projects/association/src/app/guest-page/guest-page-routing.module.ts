import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestWrapperComponent } from './guest-wrapper/guest-wrapper.component';


const routes: Routes = [
  {path: "", component: GuestWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestPageRoutingModule { }
