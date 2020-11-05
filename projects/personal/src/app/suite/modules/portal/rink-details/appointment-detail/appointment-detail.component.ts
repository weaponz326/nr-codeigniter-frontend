import { Component, OnInit, ViewChild } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from '../../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  appointmentDetail: any;

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
    this.portalApi.getSingleTask(sessionStorage.getItem('source_id'))
      .subscribe(
        res => {
          console.log(res);
          this.appointmentDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
