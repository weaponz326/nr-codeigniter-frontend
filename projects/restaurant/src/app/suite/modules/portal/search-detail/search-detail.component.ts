import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PortalApiService } from '../portal-api.service'
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService
  ) { }

  @Input() searchDetail: any;

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  createRink(accountId){
    console.log(accountId);
    sessionStorage.setItem('rink_recipient', accountId);
    this.router.navigateByUrl('suite/portal/new-rink');
  }

}
