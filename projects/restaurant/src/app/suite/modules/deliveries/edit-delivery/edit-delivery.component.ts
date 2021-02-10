import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DeliveryFormComponent } from '../delivery-form/delivery-form.component'


@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {

  constructor() { }

  @ViewChild("editDeliveryReference") editDelivery: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("deliveryFormComponentReference") deliveryForm: DeliveryFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<any>();
  @Output() deleteCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  deliveryId: any;

  openWindow(event: any){
    this.editDelivery.open();

    console.log(event.args.row.bounddata);
    this.deliveryId = event.args.row.bounddata.id;

    this.deliveryForm.orderIdStore = event.args.row.bounddata.order_id;

    this.deliveryForm.deliveryCode.val(event.args.row.bounddata.delivery_code);
    this.deliveryForm.deliveryDate.val(event.args.row.bounddata.delivery_date);
    this.deliveryForm.orderCode.val(event.args.row.bounddata.order_code);
    this.deliveryForm.customerName.val(event.args.row.bounddata.customer_name);
    this.deliveryForm.deliveryStatus.val(event.args.row.bounddata.delivery_status);
  }

  saveDelivery(){
    var deliveryData = {
      account: sessionStorage.getItem('hospital_id'),
      order_id: this.deliveryForm.orderIdStore,
      delivery_code: this.deliveryForm.deliveryCode.val(),
      delivery_date: this.deliveryForm.deliveryDate.val(),
      delivery_status: this.deliveryForm.deliveryStatus.val(),
    }

    console.log(deliveryData);

    this.editCommit.emit(deliveryData);
  }

  deleteDelivery(){
    this.deleteCommit.emit(this.deliveryId);
  }

}
