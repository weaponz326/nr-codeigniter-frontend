import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  customerDetail: any;

  ngOnInit(): void {
    this.portalApi.getSingleDelivery()
      .subscribe(
        res => {
          console.log(res);
          this.customerDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
