import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesWrapperComponent } from './employees-wrapper/employees-wrapper.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  {
    path: "",
    component: EmployeesWrapperComponent,
    children: [
      { path: "", component: AllEmployeesComponent },
      { path: "all-employees", component: AllEmployeesComponent },
      { path: "new-employee", component: NewEmployeeComponent },
      { path: "view-employee", component: ViewEmployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
