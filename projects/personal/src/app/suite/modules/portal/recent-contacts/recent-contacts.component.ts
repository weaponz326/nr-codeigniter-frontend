import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {

  constructor(private router: Router, private portalApi: PortalApiService) { }

  personalId = localStorage.getItem('personal_id');
  rinks: any;

  ngOnInit(): void {
    console.log("this hook aint working");
    this.portalApi.getRinks()
      .subscribe(
        res => {
          console.log(res);
          this.rinks = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  goToDetail(userId){
    sessionStorage.setItem('searchUser', userId)
    this.router.navigateByUrl('/suite/portal/search/search-detail');
  }

}
