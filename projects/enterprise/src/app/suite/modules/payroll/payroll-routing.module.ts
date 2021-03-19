import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: PayrollWrapperComponent,
    children: [
      { path: "", component: AllPayrollComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-payroll", component: AllPayrollComponent },
      { path: "view-payroll", component: ViewPayrollComponent },
      { path: "employee-payroll", component: EmployeePayrollComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
