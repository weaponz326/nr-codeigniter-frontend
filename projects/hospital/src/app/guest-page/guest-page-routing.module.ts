import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestWrapperComponent } from 'projects/hospital/src/app/guest-page/guest-wrapper/guest-wrapper.component';


const routes: Routes = [
  {path: "", component: GuestWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestPageRoutingModule { }
