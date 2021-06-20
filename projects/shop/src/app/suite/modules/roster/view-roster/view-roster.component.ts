import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { RosterApiService } from '../roster-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-roster',
  templateUrl: './view-roster.component.html',
  styleUrls: ['./view-roster.component.css']
})
export class ViewRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('rosterCodeReference') rosterCode: jqxInputComponent;
  @ViewChild('rosterNameReference') rosterName: jqxInputComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Rosters", url: "/suite/roster/all-rosters" },
    { text: "View Roster", url: "/suite/roster/view-roster" },
  ];

  sourceSource = ['Nurses', 'Doctors', 'Staff'];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.rosterApi.getSingleRoster()
      .subscribe(
        res => {
          console.log(res);
          this.rosterCode.val(res.roster_code);
          this.rosterName.val(res.roster_name);
          this.fromDate.val(res.from_date);
          this.toDate.val(res.to_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

    // widgets
  // ----------------------------------------------------------------------------------------

  saveRoster(){
    let rosterData = {
      account: sessionStorage.getItem('shop_id'),
      roster_code: this.rosterCode.val(),
      roster_name: this.rosterName.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val(),
    }

    this.rosterApi.putRoster(rosterData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(rosterData);
  }

  deleteRoster(){
    console.log("dude... u are gonna delete the roster?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.rosterApi.deleteRoster()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/roster/all-roster');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
