import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AccountsApiService } from '../accounts-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit, AfterViewInit {

  @ViewChild('newButtonReference') newButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('transactionsButtonReference') transactionsButton: jqxButtonComponent;

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.accountsApi.getAccounts()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  viewAccount(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('account_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/accounts/view-account')
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'account_name', type: 'string' },
      { name: 'account_number', type: 'string' },
      { name: 'bank_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Account Name", dataField: "account_name", width: "45%" },
    { text: "Account No.", dataField: "account_number", width: "25%" },
    { text: "Bank Name", dataField: "bank_name", width: "30%" },
  ]

}
