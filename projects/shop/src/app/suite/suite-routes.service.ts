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

  // receivables routes

  goReceivablesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/receivables/all-receivables');
  }

  // products routes

  goProductsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/all-products');
  }

  goProductsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/add-product');
  }

  goProductsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/view-product');
  }

  // invoice routes

  goInvoiceAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/invoice/all-invoice');
  }

  goInvoiceView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/invoice/view-invoice');
  }

  // marketting routes

  goMarkettingAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/marketting/all-marketting');
  }

  goMarkettingNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/marketting/new-campaign');
  }

  goMarkettingView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/marketting/view-campaign');
  }

  // payables routes

  goPayablesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/payables/all-payables');
  }

  // sales routes

  goSalesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/sales/all-sales');
  }

  // customers routes

  goCustomersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/all-customers');
  }

  goCustomersAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/add-customer');
  }

  goCustomersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/customers/view-customer');
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

  // orders routes

  goOrdersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/orders/all-orders');
  }

  goOrdersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/orders/view-order');
  }

  // inventory routes

  goInventoryAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/inventory/all-inventory');
  }

  // purchasing routes

  goPurchasingAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/purchasing/all-purchasing');
  }

  goPurchasingView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/purchasing/view-purchasing');
  }

  // cashflow routes

  goCashflowAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/cashflow/all-cashflow');
  }

  goCashflowSheet(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/cashflow/view-sheet');
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

}
