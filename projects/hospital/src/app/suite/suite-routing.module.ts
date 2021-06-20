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
    path: "portal",
    loadChildren: () => import("./modules/portal/portal.module").then(m => m.PortalModule)
  },
  {
    path: "settings",
    loadChildren: () => import("./modules/settings/settings.module").then(m => m.SettingsModule)
  },
  {
    path: "patients",
    loadChildren: () => import("./modules/patients/patients.module").then(m => m.PatientsModule)
  },
  {
    path: "appointments",
    loadChildren: () => import("./modules/appointments/appointments.module").then(m => m.AppointmentsModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
  },
  {
    path: "bills",
    loadChildren: () => import("./modules/bills/bills.module").then(m => m.BillsModule)
  },
  {
    path: "doctors",
    loadChildren: () => import("./modules/doctors/doctors.module").then(m => m.DoctorsModule)
  },
  {
    path: "laboratory",
    loadChildren: () => import("./modules/laboratory/laboratory.module").then(m => m.LaboratoryModule)
  },
  {
    path: "payments",
    loadChildren: () => import("./modules/payments/payments.module").then(m => m.PaymentsModule)
  },
  {
    path: "nurses",
    loadChildren: () => import("./modules/nurses/nurses.module").then(m => m.NursesModule)
  },
  {
    path: "prescriptions",
    loadChildren: () => import("./modules/prescriptions/prescriptions.module").then(m => m.PrescriptionsModule)
  },
  {
    path: "diagnosis",
    loadChildren: () => import("./modules/diagnosis/diagnosis.module").then(m => m.DiagnosisModule)
  },
  {
    path: "wards",
    loadChildren: () => import("./modules/wards/wards.module").then(m => m.WardsModule)
  },
  {
    path: "drugs",
    loadChildren: () => import("./modules/drugs/drugs.module").then(m => m.DrugsModule)
  },
  {
    path: "admissions",
    loadChildren: () => import("./modules/admissions/admissions.module").then(m => m.AdmissionsModule)
  },
  {
    path: "roster",
    loadChildren: () => import("./modules/roster/roster.module").then(m => m.RosterModule)
  },
  {
    path: "dispensary",
    loadChildren: () => import("./modules/dispensary/dispensary.module").then(m => m.DispensaryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiteRoutingModule { }
