import { Component, OnInit, ViewChild } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from '../../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  taskDetail: any;

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
    this.portalApi.getSingleTask(sessionStorage.getItem('source_id'))
      .subscribe(
        res => {
          console.log(res);
          this.taskDetail = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
