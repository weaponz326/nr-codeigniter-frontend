import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';


const routes: Routes = [
  {
    path: "",
    component: PayrollWrapperComponent,
    children: [
      { path: "all_payroll", component: AllPayrollComponent },
      { path: "view_payroll", component: ViewPayrollComponent },
      { path: "employee_payroll", component: EmployeePayrollComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
