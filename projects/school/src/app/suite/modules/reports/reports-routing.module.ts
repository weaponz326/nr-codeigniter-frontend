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
      { path: "all_reports", component: AllReportsComponent },
      { path: "class_report", component: ClassReportComponent },
      { path: "student_report", component: StudentReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
