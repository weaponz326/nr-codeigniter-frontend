import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { SelectOrderComponent } from '../select-order/select-order.component'

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  constructor() { }

  @ViewChild("selectOrderComponentReference") selectOrder: SelectOrderComponent;

  @ViewChild("deliveryCodeReference") deliveryCode: jqxInputComponent;
  @ViewChild("deliveryDateReference") deliveryDate: jqxDateTimeInputComponent;
  @ViewChild("orderCodeReference") orderCode: jqxDropDownListComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("deliveryStatusReference") deliveryStatus: jqxDropDownListComponent;

  orderIdStore: any;

  ngOnInit(): void {
  }

  orderSelected(order: any){
    console.log(order);

    this.orderCode.val(order.order_code);
    this.customerName.val(order.customer_name);
    this.orderIdStore = order.id;
  }

  statusSource: any[] = ["Processing", "Transit", "Delivered", "Canceled"];

}
