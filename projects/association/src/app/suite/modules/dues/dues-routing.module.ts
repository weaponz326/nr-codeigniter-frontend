import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DuesWrapperComponent } from './dues-wrapper/dues-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDuesComponent } from './all-dues/all-dues.component';
import { CreateDuesComponent } from './create-dues/create-dues.component';
import { ViewDuesComponent } from './view-dues/view-dues.component';
import { DuesPaymentsComponent } from './dues-payments/dues-payments.component';


const routes: Routes = [
  {
    path: "",
    component: DuesWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'all-dues', component: AllDuesComponent },
      { path: 'create-dues', component: CreateDuesComponent },
      { path: 'view-dues', component: ViewDuesComponent },
      { path: 'dues-payments', component: DuesPaymentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuesRoutingModule { }
