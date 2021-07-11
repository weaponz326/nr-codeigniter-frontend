import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-add-booked-room',
  templateUrl: './add-booked-room.component.html',
  styleUrls: ['./add-booked-room.component.css']
})
export class AddBookedRoomComponent implements OnInit {

  constructor() { }

  @ViewChild("addBookingReference") addBooking: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("roomTypeReference") roomType: jqxInputComponent;
  @ViewChild("personsNumberReference") personsNumber: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addBooking.open();
  }

  closeWindow(){
    this.addBooking.close();
  }

  saveBooking(){
    var serviceData = {
      account: sessionStorage.getItem('hotel_id'),
      room_type: this.roomType.val(),
      persons_number: this.personsNumber.val(),
    }

    console.log(serviceData);
    this.addCommit.emit(serviceData);

    this.closeWindow();
  }

}
