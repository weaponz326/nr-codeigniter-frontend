import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-wrapper',
  templateUrl: './settings-wrapper.component.html',
  styleUrls: ['./settings-wrapper.component.css']
})
export class SettingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    // { text: "General", url: "/suite/settings/general", icon: "fa fa-fw fa-list" },
    { text: "Profile", url: "/suite/settings/profile", icon: "fa fa-fw fa-building" },
    // { text: "Security", url: "/suite/settings/privacy", icon: "fa fa-fw fa-lock" },
    { text: "Billing", url: "/suite/settings/billing", icon: "fa fa-fw fa-file" }
  ]

  ngOnInit(): void {
  }

}
