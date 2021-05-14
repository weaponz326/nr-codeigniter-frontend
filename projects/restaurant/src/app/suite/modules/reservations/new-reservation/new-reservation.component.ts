import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReservationFormComponent } from '../reservation-form/reservation-form.component'

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  constructor() { }

  @ViewChild("newReservationReference") newReservation: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("reservationFormComponentReference") reservationForm: ReservationFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.newReservation.open();
  }

  closeWindow(){
    this.newReservation.close();
  }

  saveReservation(){
    var reservationData = {
      account: sessionStorage.getItem('restaurant_id'),
      resrevation_code: this.reservationForm.reservationCode.val(),
      reservation_date: this.reservationForm.reservationDate.val(),
      customer_name: this.reservationForm.customerName.val(),
      number_guests: this.reservationForm.numberGuests.val(),
      number_tables: this.reservationForm.numberTables.val(),
      arrival_date: this.reservationForm.arrivalDate.val(),
      reservation_status: this.reservationForm.reservationStatus.val(),
    }

    console.log(reservationData);
    this.addCommit.emit(reservationData);

    this.closeWindow();
  }

}
