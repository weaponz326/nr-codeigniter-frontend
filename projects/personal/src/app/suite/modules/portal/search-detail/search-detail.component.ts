import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PortalApiService } from '../portal-api.service'
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  searchDetail: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService
  ) { }

  ngOnInit(): void {
    this.portalApi.getDetail(sessionStorage.getItem('searchUser'))
      .subscribe(
        res => {
          console.log(res);
          this.searchDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  createRink(){
    this.router.navigateByUrl('suite/portal/new-rink');
  }

}
