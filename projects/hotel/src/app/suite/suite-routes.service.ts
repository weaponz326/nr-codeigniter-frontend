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
  
  // bills routes
  
  goBillsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/all-bills');
  }
  
  goBillsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bills/view-bills');
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
  
  // guests routes
  
  goGuestsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/guests/all-guests');
  }
  
  goGuestsNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/guests/new-guest');
  }
  
  goGuestsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/guests/view-guest');
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
	
  // services routes
  
  goServicesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/services/all-services');
  }
  
  goServicesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/services/view-service');
  }
  
  // checkin routes
  
  goCheckinAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/checkin/all-checkin');
  }
  
  goCheckinNew(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/checkin/new-checkin');
  }
  
  goCheckinView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/checkin/view-checkin');
  }
  
  // bookings routes
  
  goBookingsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bookings/all-bookings');
  }
  
  goBookingsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/bookings/view-booking');
  }
  
  // rooms routes
  
  goRoomsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/rooms/all-rooms');
  }
  
  goRoomsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/rooms/add-room');
  }
  
  goRoomsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/rooms/view-room');
  }
  
  // assets routes
  
  goAssetsAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/all-assets');
  }
  
  goAssetsAdd(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/add-asset');
  }
  
  goAssetsView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/assets/view-asset');
  }
  
}
