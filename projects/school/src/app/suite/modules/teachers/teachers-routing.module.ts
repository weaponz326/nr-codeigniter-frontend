import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersWrapperComponent } from './teachers-wrapper/teachers-wrapper.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';


const routes: Routes = [
  {
    path: "",
    component: TeachersWrapperComponent,
    children: [
      { path: "", component: AllTeachersComponent },
      { path: "all-teachers", component: AllTeachersComponent },
      { path: "add-teacher", component: AddTeacherComponent },
      { path: "view-teacher", component: ViewTeacherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
