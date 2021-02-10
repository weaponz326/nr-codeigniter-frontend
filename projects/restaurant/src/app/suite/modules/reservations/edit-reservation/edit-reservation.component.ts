import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReservationFormComponent } from '../reservation-form/reservation-form.component'


@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

  constructor() { }

  @ViewChild("editReservationReference") editReservation: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("reservationFormComponentReference") reservationForm: ReservationFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<any>();
  @Output() deleteCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  reservationId: any;

  openWindow(event: any){
    this.editReservation.open();

    console.log(event.args.row.bounddata);
    this.reservationId = event.args.row.bounddata.id;

    this.reservationForm.reservationCode.val(event.args.row.bounddata.reservation_code);
    this.reservationForm.reservationDate.val(event.args.row.bounddata.reservation_date);
    this.reservationForm.customerName.val(event.args.row.bounddata.customer_name);
    this.reservationForm.numberGuests.val(event.args.row.bounddata.number_guests);
    this.reservationForm.numberTables.val(event.args.row.bounddata.number_tables);
    this.reservationForm.arrivalDate.val(event.args.row.bounddata.arrival_date);
    this.reservationForm.reservationStatus.val(event.args.row.bounddata.reservation_status);
  }

  saveReservation(){
    var reservationData = {
      restaurant: sessionStorage.getItem('restaurnat_id'),
      resrevation_code: this.reservationForm.reservationCode.val(),
      reservation_date: this.reservationForm.reservationDate.val(),
      customer_name: this.reservationForm.customerName.val(),
      number_guests: this.reservationForm.numberGuests.val(),
      number_tables: this.reservationForm.numberTables.val(),
      arrival_date: this.reservationForm.arrivalDate.val(),
      reservation_status: this.reservationForm.reservationStatus.val(),
    }

    console.log(reservationData);

    this.editCommit.emit(reservationData);
  }

  deleteReservation(){
    this.deleteCommit.emit(this.reservationId);
  }

}
