import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AccountsApiService } from '../accounts-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  accountData: any;

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

  // widgets
  // ---------------------------------------------------------------------------------------

  saveAccount(){
    console.log("u are updating the account");

    this.accountData = {
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
