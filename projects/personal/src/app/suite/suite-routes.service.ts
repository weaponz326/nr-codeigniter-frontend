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

  // calendar routes

  goCalendarView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/calendar/view-calendar');
  }

  goCalendarAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/calendar/all-appointments');
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

  // notes routes

  goNotesView(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/notes/view-note');
  }

  goNotesAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/notes/all-notes');
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
    this.router.navigateByUrl('/suite/accounts/all-transactions');
  }

  // tasks routes
  goTasksKanban(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tasks/kanban-view');
  }

  goTasksAll(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/tasks/all-tasks');
  }

}
