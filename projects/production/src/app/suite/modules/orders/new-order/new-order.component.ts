import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { OrderFormComponent } from '../order-form/order-form.component'


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor() { }

  @ViewChild("newOrderReference") newOrder: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("orderFormComponentReference") orderForm: OrderFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.newOrder.open();
  }

  saveOrder(){
    var orderData = {
      production_id: sessionStorage.getItem('production_id'),
      order_code: this.orderForm.orderCode.val(),
      order_date: this.orderForm.orderDate.val(),
      customer_name: this.orderForm.customerName.val(),
      order_status: this.orderForm.orderStatus.val(),
      quantity: this.orderForm.quantity.val(),
    }

    console.log(orderData);

    this.addCommit.emit(orderData);
  }

}
