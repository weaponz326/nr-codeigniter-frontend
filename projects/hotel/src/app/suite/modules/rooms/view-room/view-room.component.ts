import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { RoomsApiService } from '../rooms-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { RoomFormComponent } from '../room-form/room-form.component';


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {

  constructor(
    private router: Router,
    private roomsApi: RoomsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('roomFormComponentReference') roomForm: RoomFormComponent;

  navHeading: any[] = [
    { text: "All Rooms", url: "/suite/rooms/all-rooms" },
    { text: "View Room", url: "/suite/rooms/view-room" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.roomsApi.getSingleRoom()
      .subscribe(
        res => {
          console.log(res);
          this.roomForm.roomNumber.val(res.room_number);
          this.roomForm.roomType.val(res.room_type);
          this.roomForm.location.val(res.location);
          this.roomForm.rate.val(res.rate);
          this.roomForm.features.val(res.features);
          this.roomForm.roomStatus.val(res.room_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveRoom(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a room");

    var roomData = {
      account: sessionStorage.getItem('hotel_id'),
      room_number: this.roomForm.roomNumber.val(),
      room_type: this.roomForm.roomType.val(),
      location: this.roomForm.location.val(),
      rate: this.roomForm.rate.val(),
      features: this.roomForm.features.val(),
      room_status: this.roomForm.roomStatus.val(),
    }

    this.roomsApi.putRoom(roomData)
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

    console.log(roomData);
  }

  deleteRoom(){
    console.log("dude... u are gonna delete the room?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.roomsApi.deleteRoom()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/room/all-room');
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
