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

  // menu routes

  goMenuAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/menu/all-items');
  }

  goMenuAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/menu/add-item');
  }

  goMenuView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/menu/view-item');
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

  // tables routes

  goTablesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tables/all-tables');
  }

  goTablesAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tables/add-table');
  }

  goTablesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tables/view-table');
  }

  // customers routes

  goCustomersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/all-customers');
  }

  goCustomersNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/new-customer');
  }

  goCustomersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/view-customer');
  }

  // deliveries routes

  goDeliveriesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/deliveries/all-deliveries');
  }

  // kitchen stock routes

  goStockAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/stock/all-items');
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

  // reservations routes

  goReservationsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/reservations/all-reservations');
  }

  // orders

  goOrdersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/orders/all-orders');
  }

  goOrdersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/orders/view-order');
  }

  // sittings

  goSittingsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/sittings/all-sittings');
  }

  // bills

  goBillsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/all-bills');
  }

  goBillsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/view-bill');
  }

}
