import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisalWrapperComponent } from './appraisal-wrapper/appraisal-wrapper.component';
import { AllAppraisalComponent } from './all-appraisal/all-appraisal.component';
import { AppraisalEmployeesComponent } from './appraisal-employees/appraisal-employees.component';
import { ViewAppraisalComponent } from './view-appraisal/view-appraisal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

// TODO: interchange the contents of all-apraisal and appraisal-employees component

const routes: Routes = [
  {
    path: "",
    component: AppraisalWrapperComponent,
    children: [
      { path: "", component: AllAppraisalComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-appraisal", component: AllAppraisalComponent },
      { path: "appraisal-employees", component: AppraisalEmployeesComponent },
      { path: "view-appraisal", component: ViewAppraisalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }
