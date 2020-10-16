import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';
import { DeleteConfirmComponent } from '../../../utilities/delete-confirm/delete-confirm.component';
import { AccountsApiService } from '../accounts-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit, AfterViewInit {

  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;
  @ViewChild('accountTransactionsComponentReference') accountTransactionsComponent: AccountTransactionsComponent;

  totalBalance = 0;

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

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
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.accountsApi.deleteAccount()
        .subscribe(
          res => {
            console.log(res);

            this.router.navigateByUrl('/suite/accounts/all-accounts');
          },
          err => {
            console.log(err);
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
    console.log("u are updating the account");

    this.accountData = {
      user: localStorage.getItem('personal_id'),
      account_name: this.accountNameInput.val(),
      account_number: this.accountNumberInput.val(),
      bank_name: this.bankNameInput.val()
    }

    this.accountsApi.putAccount(this.accountData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.accountData);
  }

  deleteAccount(){
    console.log("dude... u are gonna delete the account");

    this.deleteConfirmComponent.openWindow();
  }

}
