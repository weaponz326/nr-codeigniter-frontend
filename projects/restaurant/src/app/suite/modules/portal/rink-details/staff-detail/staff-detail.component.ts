import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  staffDetail: any;

  ngOnInit(): void {
    this.portalApi.getSingleStaff()
      .subscribe(
        res => {
          console.log(res);
          this.staffDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
