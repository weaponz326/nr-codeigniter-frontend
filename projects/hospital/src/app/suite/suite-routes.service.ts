// routes for all pages in the suite

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuiteRoutesService {

  constructor(private router: Router) { }

  goHome(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/home');
  }

  // admin routes

  goAdminDashboard(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/dashboard');
  }

  goAdminAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/all-users');
  }

  goAdminUser(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/user');
  }

  goAdminInvitations(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/invitations');
  }

  goAdminSearch(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/search');
  }

  goAdminView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admin/view-invitation');
  }

  // portal routes

  goPortalTimeline(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/portal/timeline');
  }

  goPortalNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/portal/new-rink');
  }

  goPortalView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/portal/view-rink');
  }

  goPortalSearch(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/portal/search');
  }

  // settings routes

  goSettingsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings/view-settings');
  }
  
  // patients routes
  
  goPatientsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/patients/all-patients');
  }

  goPatientsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/patients/new-patient');
  }
  
  goPatientsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/patients/view-patient');
  }
  
  // appointments routes
  
  goAppointmentsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/apponitments/all-appointments');
  }
  
  // staff routes
  
  goStaffAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/staff/all-staff');
  }
  
  goStaffNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/staff/new-staff');
  }
  
  goStaffView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/staff/view-staff');
  }
  
  // bills routes
  
  goBillsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/all-bills');
  }
  
  goBillsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/view-bill');
  }
  
  // doctors routes
  
  goDoctorsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/doctors/all-doctors');
  }
  
  goDoctorsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/doctors/new-doctor');
  }
  
  goDoctorsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/doctors/view-doctor');
  }
  
  // laboratory routes
  
  goLaboratoryAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/laboratory/all-labs');
  }
  
  goLaboratoryView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/laboratory/view-lab');
  }
  
  // payments routes
  
  goPaymentsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payments/all-payments');
  }
  
  goPaymentsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payments/new-payment');
  }
  
  goPaymentsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payments/view-payment');
  }
  
  // nurses routes
  
  goNursesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/nurses/all-nurses');
  }
  
  goNursesNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/nurses/new-nurse');
  }
  
  goNursesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/nurses/view-nurse');
  }
  
  // prescriptions routes
  
  goPrescriptionsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/prescriptions/all-prescriptions');
  }
  
  goPrescriptionsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/prescriptions/view-prescription');
  }
  
  // diagnosis routes
  
  goDiagnosisAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/diagnosis/all-diagnosis');
  }
  
  goDiagnosisView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/diagnosis/view-diagnosis');
  }
  
  // drugs routes
  
  goDrugsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/drugs/all-drugs');
  }
  
  goDrugsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/drugs/new-drug');
  }
  
  goDrugsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/drugs/view-drug');
  }
  
  // wards routes
  
  goWardsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/wards/all-wards');
  }
  
  goWardsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/wards/new-ward');
  }
  
  goWardsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/wards/view-ward');
  }
  
  // admissions routes
  
  goAdmissionsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admissions/all-admissions');
  }
  
  goAdmissionsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admissions/new-admission');
  }
  
  goAdmissionsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/admissions/view-admission');
  }
  
}
