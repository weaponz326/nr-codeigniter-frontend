import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  @ViewChild('twoAuthButtonReference') twoAuthButton: jqxButtonComponent;

  constructor(private settingsApi: SettingsApiService) { }

  ngOnInit(): void {
  }

}
