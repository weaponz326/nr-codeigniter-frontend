import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPageApiService } from '../user-page-api.service'


@Component({
  selector: 'app-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  accounts: any;

  constructor(
    private router: Router,
    private userPageApi: UserPageApiService
  ) { }

  activateAccount(accountId){
    console.log(accountId);

    this.userPageApi.postAccount(accountId)
      .subscribe(
        res => {
          console.log(res);

          sessionStorage.setItem('hospital_id', res.hospital_id);
          this.router.navigateByUrl('/suite');
        },
        err => {
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
    this.userPageApi.getAccounts()
      .subscribe(
        res => {
          console.log(res);
          this.accounts = res;
        },
        err => {
          console.log(err);
        }
      )
  }

}
