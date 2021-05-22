import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { GroupsApiService } from '../groups-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { GroupFormComponent } from '../group-form/group-form.component'


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private groupsApi: GroupsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('groupFormComponentReference') groupForm: GroupFormComponent;

  navHeading: any[] = [
    { text: "Add Group", url: "/suite/groups/add-group" },
  ];

  ngOnInit(): void {
  }

  saveGroup(){
    console.log('u are saving a new group');
    this.loadingSpinner.httpLoader.open();

    var groupData = {
      account: sessionStorage.getItem('association_id'),
      group_name: this.groupForm.groupName.val(),
      description: this.groupForm.description.val(),
    }

    console.log(groupData);

    // this.groupsApi.postGroup(groupData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();

    //       if (res.message == "OK"){
    //         sessionStorage.setItem('group_id', res.data.id);
    //         this.router.navigateByUrl('/suite/groups/view-group');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

}
