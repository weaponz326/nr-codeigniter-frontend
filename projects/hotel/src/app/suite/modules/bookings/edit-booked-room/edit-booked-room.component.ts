import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-edit-booked-room',
  templateUrl: './edit-booked-room.component.html',
  styleUrls: ['./edit-booked-room.component.css']
})
export class EditBookedRoomComponent implements OnInit {

  constructor() { }

  @ViewChild("editBookingReference") editBooking: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild("roomTypeReference") roomType: jqxInputComponent;
  @ViewChild("personsNumberReference") personsNumber: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  bookingRoomId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editBooking.open();
    this.bookingRoomId = event.args.row.bounddata.id;

    console.log(event.args.row.bounddata);

    this.roomType.val(event.args.row.bounddata.room_type);
    this.personsNumber.val(event.args.row.bounddata.persons_number);
  }

  closeWindow(){
    this.editBooking.close();
  }

  saveBooking(){
    var serviceData = {
      id: this.bookingRoomId,
      account: sessionStorage.getItem('hotel_id'),
      room_type: this.roomType.val(),
      persons_number: this.personsNumber.val(),
    }

    console.log(serviceData);
    this.editCommit.emit(serviceData);

    this.closeWindow();
  }

  deleteService(){
    this.deleteCommit.emit(this.bookingRoomId);
    this.closeWindow();
  }

}
