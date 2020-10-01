import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
