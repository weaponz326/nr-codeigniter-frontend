import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { RoomsApiService } from '../rooms-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { RoomFormComponent } from '../room-form/room-form.component';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  constructor(
    private router: Router,
    private roomsApi: RoomsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('roomFormComponentReference') roomForm: RoomFormComponent;

  navHeading: any[] = [
    { text: "Add Room", url: "/suite/rooms/add-room" },
  ];

  ngOnInit(): void {
  }

  saveRoom(){
    console.log('u are saving a new room');
    this.loadingSpinner.httpLoader.open();

    var roomData = {
      account: sessionStorage.getItem('hotel_id'),
      room_number: this.roomForm.roomNumber.val(),
      room_type: this.roomForm.roomType.val(),
      location: this.roomForm.location.val(),
      rate: this.roomForm.rate.val(),
      features: this.roomForm.features.val(),
      room_status: this.roomForm.roomStatus.val(),
    }

    console.log(roomData);

    this.roomsApi.postRoom(roomData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('room_id', res.data.id);
            this.router.navigateByUrl('/suite/rooms/view-room');
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
