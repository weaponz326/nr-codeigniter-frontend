import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  orderDetail: any;

  ngOnInit(): void {
    this.portalApi.getSingleOrder()
      .subscribe(
        res => {
          console.log(res);
          this.orderDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
