import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SittingFormComponent } from '../sitting-form/sitting-form.component'


@Component({
  selector: 'app-new-sitting',
  templateUrl: './new-sitting.component.html',
  styleUrls: ['./new-sitting.component.css']
})
export class NewSittingComponent implements OnInit {

  constructor() { }

  @ViewChild("newSittingReference") newSitting: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("sittingFormComponentReference") sittingForm: SittingFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.newSitting.open();
  }

  saveSitting(){
    var sittingData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      sitting_code: this.sittingForm.sittingCode.val(),
      sitting_date: this.sittingForm.sittingDate.val(),
      arrival_time: this.sittingForm.arrivalTime.val(),
      departure_time: this.sittingForm.departureTime.val(),
      customer_name: this.sittingForm.customerName.val(),
      number_guests: this.sittingForm.numberGuests.val(),
    }

    console.log(sittingData);

    this.addCommit.emit(sittingData);
  }

}
