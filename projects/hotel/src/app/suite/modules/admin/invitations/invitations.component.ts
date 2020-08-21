import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

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
    { text: "Date", datafield: "date", filtertype: "range", width: "20%" },
    { text: "Name", datafield: "name", width: "40%" },
    { text: "Verification Code", datafield: "code", width: "20%" },
    { text: "Status", datafield: "status", width: "20%" },
  ];

}
