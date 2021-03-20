import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdminApiService } from '../admin-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('invitationsButtonReference') invitationsButton: jqxButtonComponent;
  @ViewChild('allUsersButtonReference') allUsersButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
