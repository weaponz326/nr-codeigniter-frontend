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

  // accounts routes
  goAccountsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/accounts/all-accounts');
  }

  goAccountsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/accounts/view-account');
  }

  goAccountsTransactions(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/accounts/transactions');
  }

  // payroll routes

  goPayrollAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payroll/all-payroll');
  }

  goPayrollView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payroll/view-payroll');
  }

  goPayrollEmployee(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payroll/employee-payroll');
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
  
  // assets routes
  
  goAssetsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/all-assets');
  }
  
  goAssetsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/add-assets');
  }
  
  goAssetsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/view-assets');
  }
  
  // leave routes
  
  goLeaveAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/leave/all-leave');
  }
  
  goLeaveAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/leave/add-leave');
  }
  
  goLeaveView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/leave/view-leave');
  }
  
  // budget routes
  
  goBudgetAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/budget/all-budget');
  }
  
  goBudgetView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/budget/view-budget');
  }
  
  // procuremoent routes

  goProcurementAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/procurement/all-procurement');
  }
  
  goProcurementNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/procurement/new-order');
  }

  goProcurementView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/procurement/view-order');
  }
  
  // letters routes

  goLettersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/letters/all-letters');
  }
  
  // appraisal routes

  goAppraisalAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/appraisal/all-appraisal');
  }
  
  goAppraisalView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/appraisal/view-appraisal');
  }
  
  // files routes

  goFilesFolders(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/files/all-folders');
  }
  
  goFilesViewFolder(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/files/view-folder');
  }
  
  goFilesViewFile(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/files/view-file');
  }
  
  // employees routes
  
  goEmployeesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/employess/all-employees');
  }
  
  goEmployeesNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/employess/new-employees');
  }
  
  goEmployeesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/employess/view-employees');
  }
  
  // ledger routes
  
  goLedgerAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/ledger/all-ledger');
  }
  
  goLedgerView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/ledger/view-ledger');
  }
  
}
