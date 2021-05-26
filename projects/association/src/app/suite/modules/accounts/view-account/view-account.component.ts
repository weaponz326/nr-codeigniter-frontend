import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AccountsApiService } from '../accounts-api.service';
import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
  ) { }

  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;
  @ViewChild('accountTransactionsComponentReference') accountTransactionsComponent: AccountTransactionsComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/suite/accounts/all-accounts" },
    { text: "View Account", url: "/suite/accounts/view-account" },
  ];

  totalBalance = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.accountsApi.getSingleAccount()
      .subscribe(
        res => {
          console.log(res);
          this.accountNameInput.val(res.account_name);
          this.accountNumberInput.val(res.account_number);
          this.bankNameInput.val(res.bank_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.accountsApi.deleteAccount()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/accounts/all-accounts');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  onBalanceCalculated(balance: any){
    this.totalBalance = balance.sum;
    console.log("balance is being calculated");
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  accountData: any;

  saveAccount(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the account");

    this.accountData = {
      account: sessionStorage.getItem('enterprise_id'),
      account_name: this.accountNameInput.val(),
      account_number: this.accountNumberInput.val(),
      bank_name: this.bankNameInput.val()
    }

    this.accountsApi.putAccount(this.accountData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(this.accountData);
  }

  deleteAccount(){
    console.log("dude... u are gonna delete the account");

    this.deleteConfirmComponent.openWindow();
  }

}
