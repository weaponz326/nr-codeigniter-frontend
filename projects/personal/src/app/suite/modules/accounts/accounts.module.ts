import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'
import { jqxInputModule } from 'jqwidgets-ng/jqxinput'
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { AccountsWrapperComponent } from './accounts-wrapper/accounts-wrapper.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { AddAccountComponent } from './add-account/add-account.component';


@NgModule({
  declarations: [
    AccountsWrapperComponent, 
    AllAccountsComponent, 
    ViewAccountComponent, 
    AccountTransactionsComponent, 
    AllTransactionsComponent, 
    AddAccountComponent, 
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxWindowModule
  ]
})
export class AccountsModule { }
