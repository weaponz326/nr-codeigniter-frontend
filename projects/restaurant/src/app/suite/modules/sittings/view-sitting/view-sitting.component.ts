import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SittingFormComponent } from '../sitting-form/sitting-form.component'


@Component({
  selector: 'app-view-sitting',
  templateUrl: './view-sitting.component.html',
  styleUrls: ['./view-sitting.component.css']
})
export class ViewSittingComponent implements OnInit {

  constructor() { }

  @ViewChild("viewSittingReference") viewSitting: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("sittingFormComponentReference") sittingForm: SittingFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  sittingId
  ngOnInit(): void {
  }

  openWindow(event: any){
    this.viewSitting.open();

    console.log(event.args.row.bounddata);
    this.sittingId = event.args.row.bounddata.id;

    this.sittingForm.sittingCode.val(event.args.row.bounddata.sitting_code);
    this.sittingForm.sittingDate.val(event.args.row.bounddata.sitting_date);
    this.sittingForm.arrivalTime.val(event.args.row.bounddata.arrival_time);
    this.sittingForm.departureTime.val(event.args.row.bounddata.departure_time);
    this.sittingForm.customerName.val(event.args.row.bounddata.customer_name);
    this.sittingForm.numberGuests.val(event.args.row.bounddata.number_guests);
  }

  closeWindow(){
    this.viewSitting.close();
  }

  saveSitting(){
    var sittingData = {
      id: this.sittingId,
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      sitting_code: this.sittingForm.sittingCode.val(),
      sitting_date: this.sittingForm.sittingDate.val(),
      arrival_time: this.sittingForm.arrivalTime.val(),
      departure_time: this.sittingForm.departureTime.val(),
      customer_name: this.sittingForm.customerName.val(),
      number_guests: this.sittingForm.numberGuests.val(),
    }

    console.log(sittingData);
    this.editCommit.emit(sittingData);

    this.closeWindow();
  }

  deleteSitting(){
    this.deleteCommit.emit(this.sittingId);
    this.closeWindow();
  }

}
