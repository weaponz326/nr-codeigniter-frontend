import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "admin",
    loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "parents",
    loadChildren: () => import("./modules/parents/parents.module").then(m => m.ParentsModule)
  },
  {
    path: "assessment",
    loadChildren: () => import("./modules/assessment/assessment.module").then(m => m.AssessmentModule)
  },
  {
    path: "subjects",
    loadChildren: () => import("./modules/subjects/subjects.module").then(m => m.SubjectsModule)
  },
  {
    path: "attendance",
    loadChildren: () => import("./modules/attendance/attendance.module").then(m => m.AttendanceModule)
  },
  {
    path: "students",
    loadChildren: () => import("./modules/students/students.module").then(m => m.StudentsModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./modules/reports/reports.module").then(m => m.ReportsModule)
  },
  {
    path: "payments",
    loadChildren: () => import("./modules/payments/payments.module").then(m => m.PaymentsModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
  },
  {
    path: "terms",
    loadChildren: () => import("./modules/terms/terms.module").then(m => m.TermsModule)
  },
  {
    path: "classes",
    loadChildren: () => import("./modules/classes/classes.module").then(m => m.ClassesModule)
  },
  {
    path: "fees",
    loadChildren: () => import("./modules/fees/fees.module").then(m => m.FeesModule)
  },
  {
    path: "timetables",
    loadChildren: () => import("./modules/timetables/timetables.module").then(m => m.TimetablesModule)
  },
  {
    path: "teachers",
    loadChildren: () => import("./modules/teachers/teachers.module").then(m => m.TeachersModule)
  },
  {
    path: "portal",
    loadChildren: () => import("./modules/portal/portal.module").then(m => m.PortalModule)
  },
  {
    path: "settings",
    loadChildren: () => import("./modules/settings/settings.module").then(m => m.SettingsModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiteRoutingModule { }
