import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService } from '../admin-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.css']
})
export class ViewInvitationComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "Invitations", url: "/suite/admin/invitations" },
    { text: "View Invitation", url: "/suite/admin/view-invitation" },
  ];

  invitation: any;

  ngOnInit(): void {
  }

}
