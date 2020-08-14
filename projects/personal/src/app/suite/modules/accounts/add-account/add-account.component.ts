import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AccountsApiService } from '../accounts-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild("addAccountReference") addAccountWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;

  accountData: any;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------

  // open add account popup dialog window
  openWindow(){
    this.addAccountWindow.open();
  }

  saveAccount(){
    this.accountData = {
      user: localStorage.getItem('personal_id'),
      account_name: this.accountNameInput.val(),
      account_number: this.accountNumberInput.val(),
      bank_name: this.bankNameInput.val()
    }

    this.accountsApi.postAccount(this.accountData)
      .subscribe(
        res => {
          console.log(res);
          if (res.status == true){
            sessionStorage.setItem('account_id', res.account_id)

            this.router.navigateByUrl('/suite/accounts/view-account');
          }
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.accountData);
  }
}
