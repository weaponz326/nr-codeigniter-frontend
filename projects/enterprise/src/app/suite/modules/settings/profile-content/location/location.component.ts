import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  @ViewChild('countryReference') countryInput: jqxComboBoxComponent;
  @ViewChild('stateReference') stateInput: jqxComboBoxComponent;
  @ViewChild('cityReference') cityInput: jqxComboBoxComponent;
  @ViewChild('saveLocationButtonReference') saveLocationButton: jqxButtonComponent;

  @Output() locationEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitLocation(){
    let data = {
      country: this.countryInput.val(),
      state: this.stateInput.val(),
      city: this.cityInput.val(),
    }

  	this.locationEvent.emit(data);
  }

}
