import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {

  constructor() { }

  @ViewChild('contactsPanelReference') contactsPanel: jqxPanelComponent;

  ngOnInit(): void {
  }

}
