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
    this.router.navigateByUrl('/suite/settings/dashboard');
  }

  // parents routes

  goParentsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/parents/all-parents');
  }

  goParentsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/parents/new-parent');
  }

  goParentsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/parents/view-parent');
  }

  // assessment routes

  goAssessmentAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assessment/all-assessment');
  }

  goAssessmentNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assessment/new-assessment');
  }

  goAssessmentView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assessment/view-assessment');
  }

  // subjects routes

  goSubjectsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/subjects/all-subjects');
  }

  goSubjectsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/subjects/add-subject');
  }

  goSubjectsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/subjects/view-subject');
  }

  // attendance routes

  goAttendanceAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/attendance/all-attendance');
  }

  goAttendanceView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/attendance/view-attendance');
  }

  goAttendanceCheck(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/attendance/check-attendance');
  }

  // students routes

  goStudentsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/students/all-students');
  }

  goStudentsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/students/new-student');
  }

  goStudentsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/students/view-student');
  }

  // reports routes

  goReportsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/reports/all-reports');
  }

  goReportsClass(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/reports/class-report');
  }

  goReportsStudent(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/reports/student-report');
  }

  // teachers routes

  goTeachersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/teachers/all-teachers');
  }

  goTeachersAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/teachers/add-teacher');
  }

  goTeachersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/teachers/view-teacher');
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

  // term routes

  goTermsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/terms/all-terms');
  }

  goTermsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/terms/new-term');
  }

  goTermsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/terms/view-term');
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

  // classes routes

  goClassesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/classes/all-classes');
  }

  goClassesNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/classes/new-class');
  }

  goClassesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/classes/view-class');
  }

  // fees routes

  goFeesBills(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/fees/all-bills');
  }

  goFeesStudent(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/fees/student-bill');
  }

  goFeesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/fees/all-fees');
  }

  goFeesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/fees/view-fees');
  }

  // timetables

  goTimetablesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/timetables/all-timetables');
  }

  goTimetablesFull(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/timetables/full-timetable');
  }

  goTimetablesClass(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/timetables/class-timetable');
  }

}
