import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { GroupsApiService } from '../groups-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { GroupFormComponent } from '../group-form/group-form.component'


@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private groupsApi: GroupsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('groupFormComponentReference') groupForm: GroupFormComponent;

  navHeading: any[] = [
    { text: "All Groups", url: "/suite/groups/all-groups" },
    { text: "View Group", url: "/suite/groups/view-group" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.groupsApi.getSingleGroup()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.groupForm.groupName.val(res.group_name);
    //       this.groupForm.description.val(res.description);
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  saveGroup(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a group");

    var groupData = {
      account: sessionStorage.getItem('association_id'),
      group_name: this.groupForm.groupName.val(),
      description: this.groupForm.description.val(),
    }

    // this.groupsApi.putGroup(groupData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )

    console.log(groupData);
  }

  deleteGroup(){
    console.log("dude... u are gonna delete the group?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      // this.groupsApi.deleteGroup()
      //   .subscribe(
      //     res => {
      //       console.log(res);
      //       this.loadingSpinner.httpLoader.close();

      //       this.router.navigateByUrl('/suite/groups/all-groups');
      //     },
      //     err => {
      //       console.log(err);
      //       this.loadingSpinner.httpLoader.close();
      //       this.connectionNotification.errorNotification.open();
      //     }
      //   )
    }
  }

}
