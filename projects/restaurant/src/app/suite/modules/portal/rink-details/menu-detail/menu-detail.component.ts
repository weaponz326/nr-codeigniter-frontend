import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  menuDetail: any;

  ngOnInit(): void {
    this.portalApi.getSingleMenu()
      .subscribe(
        res => {
          console.log(res);
          this.menuDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
