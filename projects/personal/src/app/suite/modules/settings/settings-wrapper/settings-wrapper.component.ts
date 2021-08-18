import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-wrapper',
  templateUrl: './settings-wrapper.component.html',
  styleUrls: ['./settings-wrapper.component.css']
})
export class SettingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "General", url: "/suite/settings/general", icon: "fa fa-fw fa-list" },
    { text: "Profile", url: "/suite/settings/profile", icon: "fa fa-fw fa-user" },
    { text: "Security", url: "/suite/settings/security", icon: "fa fa-fw fa-lock" }
  ]

  ngOnInit(): void {
  }

}
