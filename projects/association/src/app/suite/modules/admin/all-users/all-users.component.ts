import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AdminApiService } from '../admin-api.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/suite/admin/all-users" },
  ];

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "User's Name", datafield: "personal_name", width: "60%" },
    { text: "User Level", datafield: "level", width: "40%" },
  ];

}
