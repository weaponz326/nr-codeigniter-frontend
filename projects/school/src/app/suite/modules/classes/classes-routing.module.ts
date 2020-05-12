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
      { path: "all_classes", component: AllClassesComponent },
      { path: "new_class", component: NewClassComponent },
      { path: "view_class", component: ViewClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
