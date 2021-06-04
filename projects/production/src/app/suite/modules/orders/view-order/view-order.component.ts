import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { OrderFormComponent } from '../order-form/order-form.component'


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  @ViewChild("viewOrderReference") viewOrder: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("orderFormComponentReference") orderForm: OrderFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  orderId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.viewOrder.open();

    console.log(event.args.row.bounddata);
    this.orderId = event.args.row.bounddata.id;

    this.orderForm.orderCode.val(event.args.row.bounddata.order_code);
    this.orderForm.orderDate.val(event.args.row.bounddata.order_date);
    this.orderForm.customerName.val(event.args.row.bounddata.customer_name);
    this.orderForm.quantity.val(event.args.row.bounddata.quantity);
    this.orderForm.orderStatus.val(event.args.row.bounddata.order_status);
  }

  closeWindow(){
    this.viewOrder.close();
  }

  saveOrder(){
    var orderData = {
      id: this.orderId,
      account: sessionStorage.getItem('shop_id'),
      order_code: this.orderForm.orderCode.val(),
      order_date: this.orderForm.orderDate.val(),
      customer_name: this.orderForm.customerName.val(),
      order_status: this.orderForm.orderStatus.val(),
      quantity: this.orderForm.quantity.val(),
    }

    console.log(orderData);

    this.editCommit.emit(orderData);
    this.closeWindow();
  }

  deleteOrder(){
    this.deleteCommit.emit(this.orderId);
    this.closeWindow();
  }

}
