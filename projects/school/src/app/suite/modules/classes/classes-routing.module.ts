import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesWrapperComponent } from './classes-wrapper/classes-wrapper.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassComponent } from './view-class/view-class.component';


const routes: Routes = [
  {
    path: "",
    component: ClassesWrapperComponent,
    children: [
      { path: "", component: AllClassesComponent },
      { path: "all-classes", component: AllClassesComponent },
      { path: "new-class", component: NewClassComponent },
      { path: "view-class", component: ViewClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
