import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor(
    private adminApi: AdminApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "User's Name", datafield: "personal_name", width: "60%" },
    { text: "User Level", datafield: "level", width: "40%" },
  ];

}