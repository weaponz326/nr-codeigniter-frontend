import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { StudentReportComponent } from './student-report/student-report.component';


const routes: Routes = [
  {
    path: "",
    component: ReportsWrapperComponent,
    children: [
      { path: "", component: AllReportsComponent },
      { path: "all-reports", component: AllReportsComponent },
      { path: "class-report", component: ClassReportComponent },
      { path: "student-report", component: StudentReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
