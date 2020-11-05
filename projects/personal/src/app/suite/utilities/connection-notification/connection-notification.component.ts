import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';


@Component({
  selector: 'app-connection-notification',
  templateUrl: './connection-notification.component.html',
  styleUrls: ['./connection-notification.component.css']
})
export class ConnectionNotificationComponent implements OnInit {

  @ViewChild('errorNotificationReference', { static: false }) errorNotification: jqxNotificationComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
