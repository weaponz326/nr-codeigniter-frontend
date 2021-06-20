import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { RosterApiService } from '../roster-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-roster',
  templateUrl: './new-roster.component.html',
  styleUrls: ['./new-roster.component.css']
})
export class NewRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild("newRosterReference") newRoster: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('rosterCodeReference') rosterCode: jqxInputComponent;
  @ViewChild('rosterNameReference') rosterName: jqxInputComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;
  @ViewChild('sourceReference') source: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  sourceSource = ['Nurses', 'Doctors', 'Staff'];

  ngOnInit(): void {
  }

  openWindow(){
    this.newRoster.open();
  }

  closeWindow(){
    this.newRoster.close();
  }

  saveRoster(){
    this.loadingSpinner.httpLoader.open();

    let rosterData = {
      account: sessionStorage.getItem('hospital_id'),
      roster_code: this.rosterCode.val(),
      roster_name: this.rosterName.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val(),
      source: this.source.val(),
    }

    this.rosterApi.postRoster(rosterData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('roster_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/roster/view-roster');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(rosterData);
  }


}
