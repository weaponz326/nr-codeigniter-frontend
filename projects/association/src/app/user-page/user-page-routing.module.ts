import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';


const routes: Routes = [
  {path: "", component: UserWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
