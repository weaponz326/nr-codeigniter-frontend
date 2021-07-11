import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';


@Component({
  selector: 'app-add-service-item',
  templateUrl: './add-service-item.component.html',
  styleUrls: ['./add-service-item.component.css']
})
export class AddServiceItemComponent implements OnInit {

  constructor() { }

  @ViewChild("addServiceReference") addService: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemDateReference") itemDate: jqxDateTimeInputComponent;
  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("amountReference") amount: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addService.open();
  }

  closeWindow(){
    this.addService.close();
  }

  saveService(){
    var serviceData = {
      account: sessionStorage.getItem('hotel_id'),
      item_date: this.itemDate.val(),
      description: this.description.val(),
      amount: this.amount.val(),
    }

    console.log(serviceData);
    this.addCommit.emit(serviceData);

    this.closeWindow();
  }

}
