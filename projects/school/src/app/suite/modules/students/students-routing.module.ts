import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsWrapperComponent } from './students-wrapper/students-wrapper.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';


const routes: Routes = [
  {
    path: "",
    component: StudentsWrapperComponent,
    children: [
      { path: "all_students", component: AllStudentsComponent },
      { path: "new_student", component: NewStudentComponent },
      { path: "view_student", component: ViewStudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
