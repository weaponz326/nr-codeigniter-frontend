import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-wrapper',
  templateUrl: './settings-wrapper.component.html',
  styleUrls: ['./settings-wrapper.component.css']
})
export class SettingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "Profile", url: "/suite/settings/profile", icon: "fa fa-fw fa-user" },
    { text: "Privacy", url: "/suite/settings/privacy", icon: "fa fa-fw fa-mask" },
    { text: "billings", url: "/suite/settings/billings", icon: "fa fa-fw fa-money-check" }
  ]

  ngOnInit(): void {
  }

}
