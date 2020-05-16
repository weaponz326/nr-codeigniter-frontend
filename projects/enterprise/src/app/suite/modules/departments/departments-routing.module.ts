import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentsWrapperComponent } from './departments-wrapper/departments-wrapper.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';


const routes: Routes = [
  {
    path: "",
    component: DepartmentsWrapperComponent,
    children: [
      { path: "all_departments", component: AllDepartmentsComponent },
      { path: "add_department", component: AddDepartmentComponent },
      { path: "view_department", component: ViewDepartmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
