import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('accessFormComponentReference') accessFormComponent;

  @ViewChild('userNameReference') userNameInput: jqxInputComponent;
  @ViewChild('accessLevelReference') accessLevelTypeDropDownList: jqxDropDownListComponent;
  @ViewChild('saveReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelReference') cancelButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/suite/admin/all-users" },
    { text: "View User", url: "/suite/admin/view-user" },
  ];

  ngOnInit(): void {
  }

  changeLevel(event: any)  {
    console.log(event.args.item.value);

    this.accessFormComponent.setLevelAccess(event.args.item.value);
  }

  // widgets
  // -----------------------------------------------------------------------------------

  levelSource: any[] = ["Admin", "Manager", "Staff"];

}
