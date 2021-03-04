import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-user-mini-activities',
  templateUrl: './user-mini-activities.component.html',
  styleUrls: ['./user-mini-activities.component.css']
})
export class UserMiniActivitiesComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('listBoxReference') listBox: jqxListBoxComponent;

  ngOnInit(): void {
  }

}
