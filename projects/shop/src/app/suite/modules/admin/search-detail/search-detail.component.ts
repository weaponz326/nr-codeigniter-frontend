import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

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
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  searchDetail: any;

  ngOnInit(): void {
    // this.adminApi.getDetail(sessionStorage.getItem('searchUser'))
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.searchDetail = res;
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  sendInvitation(){
    // route after sending
    this.router.navigateByUrl('suite/admin/view-invitation');
  }

}
