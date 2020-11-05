import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-rink',
  templateUrl: './view-rink.component.html',
  styleUrls: ['./view-rink.component.css']
})
export class ViewRinkComponent implements OnInit {

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  personalId = localStorage.getItem('personal_id');
  rink: any;

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
    console.log("this hook aint working");
    this.portalApi.getSingleRink(sessionStorage.getItem('rink_id'))
      .subscribe(
        res => {
          console.log(res);
          this.rink = res;
          sessionStorage.setItem('source_id', res.rink_source)

          // route to show rink detail
          if (res.rink_type == "Task"){
            this.router.navigateByUrl('suite/portal/view-rink/task');
          }else if(res.rink_type == "Appointment"){
            this.router.navigateByUrl('suite/portal/view-rink/appointment');
          }else if(res.rink_type == "Note"){
            this.router.navigateByUrl('suite/portal/view-rink/note');
          }
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
