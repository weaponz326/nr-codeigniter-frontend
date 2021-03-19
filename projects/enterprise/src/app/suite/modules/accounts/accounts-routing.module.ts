import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsWrapperComponent } from './accounts-wrapper/accounts-wrapper.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: AccountsWrapperComponent,
    children: [
      { path: "", component: AllAccountsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-accounts", component: AllAccountsComponent },
      { path: "view-account", component: ViewAccountComponent },
      { path: "transactions", component: AllTransactionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
