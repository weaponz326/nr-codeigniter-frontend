import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DeliveryFormComponent } from '../delivery-form/delivery-form.component'


@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.css']
})
export class NewDeliveryComponent implements OnInit {

  constructor() { }

  @ViewChild("newDeliveryReference") newDelivery: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("deliveryFormComponentReference") deliveryForm: DeliveryFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.newDelivery.open();
  }

  saveDelivery(){
    var deliveryData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      order_id: this.deliveryForm.orderIdStore,
      delivery_code: this.deliveryForm.deliveryCode.val(),
      delivery_date: this.deliveryForm.deliveryDate.val(),
      delivery_status: this.deliveryForm.deliveryStatus.val(),
    }

    console.log(deliveryData);

    this.addCommit.emit(deliveryData);
  }

}
