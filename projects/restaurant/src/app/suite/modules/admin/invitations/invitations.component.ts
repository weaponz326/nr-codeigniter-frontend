import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AdminApiService } from '../admin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Invitations", url: "/suite/admin/invitations" },
  ];

  ngOnInit(): void {
    this.adminApi.getAllInvitations()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  viewInvitation(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('invitation_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/admin/view-invitation');
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'date_sent', type: 'string' },
      { name: 'user_name', type: 'string' },
      { name: 'invitation_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Invitation Date", datafield: "date_sent", filtertype: "range", width: "25%" },
    { text: "User's Name", datafield: "user_name", width: "50%" },
    { text: "Invitation Status", datafield: "invitation_status", width: "25%" },
  ];

}
