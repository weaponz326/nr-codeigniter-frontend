import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { HousekeepingApiService } from '../housekeeping-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-housekeeping',
  templateUrl: './new-housekeeping.component.html',
  styleUrls: ['./new-housekeeping.component.css']
})
export class NewHousekeepingComponent implements OnInit {

  constructor(
    private router: Router,
    private housekeepingApi: HousekeepingApiService,
  ) { }

  @ViewChild("newHousekeepingReference") newHousekeeping: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("housekeepingCodeReference") housekeepingCode: jqxInputComponent;
  @ViewChild("housekeepingDateReference") housekeepingDate: jqxDateTimeInputComponent;
  @ViewChild("roomNumberReference") roomNumber: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;


  ngOnInit(): void {
  }

  openWindow(){
    this.newHousekeeping.open();
  }

  closeWindow(){
    this.newHousekeeping.close();
  }

  saveHousekeeping(){
    console.log('u are saving a new room');
    this.loadingSpinner.httpLoader.open();

    var housekeepingData = {
      account: sessionStorage.getItem('hotel_id'),
      housekeeping_code: this.housekeepingCode.val(),
      housekeeping_date: this.housekeepingDate.val(),
      room_number: this.roomNumber.val(),
    }

    console.log(housekeepingData);

    this.housekeepingApi.postHouseKeeping(housekeepingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('housekeeping_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/housekeeping/view-housekeeping');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }
}
