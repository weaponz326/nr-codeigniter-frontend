import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsWrapperComponent } from './students-wrapper/students-wrapper.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: StudentsWrapperComponent,
    children: [
      { path: "", component: AllStudentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-students", component: AllStudentsComponent },
      { path: "new-student", component: NewStudentComponent },
      { path: "view-student", component: ViewStudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
