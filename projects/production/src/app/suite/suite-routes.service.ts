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

  // stock routes

  goStockAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/stock/all-stock');
  }

  // equipment routes

  goEquipmentAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/equipment/all-equipment');
  }

  goEquipmentAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/equipment/add-equipment');
  }

  goEquipmentView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/equipment/view-equipment');
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

  // orders route

  goOrdersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/orders/all-orders');
  }

  // manufacturing routes

  goManufacturingAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/manufacturing/all-manufacturing');
  }

  // contractors routes

  goContractorsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/contractors/all-contractors');
  }

  goContractorsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/contractors/add-contractor');
  }

  goContractorsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/contractors/view-contractor');
  }

  // projects routes
  // TODO


  // workers routes

  goWorkersAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/workers/all-workers');
  }

  goWorkersNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/workers/new-worker');
  }

  goWorkersView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/workers/view-worker');
  }

  // tasks routes
  // TODO


  // products routes

  goProductsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/all-products');
  }

  goProductsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/new-product');
  }

  goProductsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/products/view-product');
  }

}
