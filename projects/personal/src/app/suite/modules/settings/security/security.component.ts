import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('twoAuthButtonReference') twoAuthButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
