import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';


@Component({
  selector: 'app-access-deny',
  templateUrl: './access-deny.component.html',
  styleUrls: ['./access-deny.component.css']
})
export class AccessDenyComponent implements OnInit {

  constructor() { }

  @ViewChild('accessNotificationReference', { static: false }) accessNotification: jqxNotificationComponent;

  ngOnInit(): void {
  }

}
