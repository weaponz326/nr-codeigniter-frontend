import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { AdminApiService } from '../admin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('accessFormComponentReference') accessFormComponent;

  @ViewChild('userNameReference') userNameInput: jqxInputComponent;
  @ViewChild('accessLevelReference') accessLevelTypeDropDownList: jqxDropDownListComponent;
  @ViewChild('saveReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelReference') cancelButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/suite/admin/all-users" },
    { text: "View User", url: "/suite/admin/view-user" },
  ];

  levelSource: any[] = ["Admin", "Manager", "Staff"];

  ngOnInit(): void {
    this.adminApi.getUser()
      .subscribe(
        res => {
          console.log(res);
          this.userNameInput.val(res.user_name);
          this.accessLevelTypeDropDownList.val(res.user_level);

          this.accessFormComponent.initAccessLevel();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveUser(){
    // sends both user access details

    let user = { user_level: this.accessLevelTypeDropDownList.val() }
    this.adminApi.putUser(user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.accessFormComponent.saveAccessLevel();
  }

  changeLevel(event: any)  {
    console.log(event.args.item.value);

    this.accessFormComponent.setLevelAccess(event.args.item.value);
  }

}
