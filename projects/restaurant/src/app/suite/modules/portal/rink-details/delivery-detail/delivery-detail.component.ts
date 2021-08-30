import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  deliveryDetail: any;

  ngOnInit(): void {
    this.portalApi.getSingleDelivery()
      .subscribe(
        res => {
          console.log(res);
          this.deliveryDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
