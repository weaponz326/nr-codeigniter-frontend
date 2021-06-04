import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { HousekeepingApiService } from '../housekeeping-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-housekeeping',
  templateUrl: './view-housekeeping.component.html',
  styleUrls: ['./view-housekeeping.component.css']
})
export class ViewHousekeepingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private housekeepingApi: HousekeepingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('housekeepingCodeReference') housekeepingCode: jqxInputComponent;
  @ViewChild('housekeepingDateReference') housekeepingDate: jqxDateTimeInputComponent;
  @ViewChild('roomNumberReference') roomNumber: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Housekeeping", url: "/suite/housekeeping/all-housekeeping" },
    { text: "View Housekeeping", url: "/suite/housekeeping/view-housekeeping" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.housekeepingApi.getSingleHouseKeeping()
      .subscribe(
        res => {
          console.log(res);
          this.housekeepingCode.val(res.housekeeping_code);
          this.housekeepingDate.val(res.housekeeping_date);
          this.roomNumber.val(res.room_number);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveHouseKeeping(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a housekeeping");

    var housekeepingData = {
      account: sessionStorage.getItem('hotel_id'),
      housekeeping_code: this.housekeepingCode.val(),
      housekeeping_date: this.housekeepingDate.val(),
      room_number: this.roomNumber.val(),
    }

    this.housekeepingApi.putHouseKeeping(housekeepingData)
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

    console.log(housekeepingData);
  }

  deleteHouseKeeping(){
    console.log("dude... u are gonna delete the housekeeping?");

    // this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.housekeepingApi.deleteHouseKeeping()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/housekeeping/all-housekeeping');
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
