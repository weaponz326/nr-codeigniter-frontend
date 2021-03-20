import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { OrdersApiService } from '../orders-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService,
  ) { }


  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("addOrderReference") addOrder: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("orderCodeReference") orderCode: jqxInputComponent;
  @ViewChild("orderDateReference") orderDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("orderTypeReference") orderType: jqxDropDownListComponent;
  @ViewChild("orderStatusReference") orderStatus: jqxDropDownListComponent;

  orderTypeSource: any[] = ["Sitting", "Delivery", "Drive Through", "Take Away"];
  orderStatusSource: any[] = ["Ordered", "Processing", "Delivered"];

  ngOnInit(): void {
  }

  openWindow(){
    this.addOrder.open();
  }

  saveOrder(){
    this.loadingSpinner.httpLoader.open();

    let orderData = {
      hospital: localStorage.getItem('restaurant_id'),
      order_code: this.orderCode.val(),
      order_date: this.orderDate.val(),
      order_type: this.orderType.val(),
      customer_name: this.customerName.val(),
      order_status: this.orderStatus.val(),
    }

    this.ordersApi.postOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/orders/view-order');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(orderData);
  }

}
