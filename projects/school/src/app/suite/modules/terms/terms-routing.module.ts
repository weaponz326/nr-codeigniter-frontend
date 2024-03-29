import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsWrapperComponent } from './terms-wrapper/terms-wrapper.component';
import { AllTermsComponent } from './all-terms/all-terms.component';
import { NewTermComponent } from './new-term/new-term.component';
import { ViewTermComponent } from './view-term/view-term.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TermsWrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-terms", component: AllTermsComponent },
      { path: "new-term", component: NewTermComponent },
      { path: "view-term", component: ViewTermComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
