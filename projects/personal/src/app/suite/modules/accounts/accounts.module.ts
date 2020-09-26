import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { AccountsRoutingModule } from './accounts-routing.module';
import { UtilitiesModule } from '../../utilities/utilities.module';

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
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxWindowModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxNumberInputModule
  ]
})
export class AccountsModule { }
