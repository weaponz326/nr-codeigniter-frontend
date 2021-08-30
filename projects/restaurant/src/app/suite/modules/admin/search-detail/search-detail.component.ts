import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdminApiService } from '../admin-api.service';
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
    private adminApi: AdminApiService
  ) { }

  @Input() searchDetail: any;

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  sendInvitaion(userId) {
    let data = {
      account: sessionStorage.getItem('restaurant_id'),
      personal: userId,
      invitation_status: 'Awaiting',
    }

    this.adminApi.sendInvitation(data)
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('invitation_id', res.id);
          this.router.navigateByUrl('/suite/admin/view-invitation');
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
