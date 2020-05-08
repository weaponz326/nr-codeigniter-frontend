import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NursesWrapperComponent } from './nurses-wrapper/nurses-wrapper.component';
import { AllNursesComponent } from './all-nurses/all-nurses.component';
import { NewNurseComponent } from './new-nurse/new-nurse.component';
import { ViewNurseComponent } from './view-nurse/view-nurse.component';


const routes: Routes = [
  {
    path: "", 
    component: NursesWrapperComponent,
    children: [
      { path: "all_nurses", component: AllNursesComponent },
      { path: "new_nurse", component: NewNurseComponent },
      { path: "view_nurse", component: ViewNurseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NursesRoutingModule { }
