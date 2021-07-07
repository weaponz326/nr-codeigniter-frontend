import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { OrdersApiService } from '../orders-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService,
  ) { }

  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('orderDateReference') orderDate: jqxDateTimeInputComponent;
  @ViewChild('customerNameReference') customerName: jqxComboBoxComponent;
  @ViewChild('orderTypeReference') orderType: jqxDropDownListComponent;
  @ViewChild('orderStatusReference') orderStatus: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;
  
  @ViewChild('orderDetailsComponentReference') orderDetails: OrderDetailsComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/suite/orders/all-orders" },
    { text: "View Order", url: "/suite/orders/view-order" },
  ];

  orderTypeSource: any[] = ["Sitting", "Delivery", "Drive Through", "Take Away"];
  orderStatusSource: any[] = ["Ordered", "Processing", "Delivered"];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ordersApi.getSingleOrder()
      .subscribe(
        res => {
          console.log(res);
          this.orderCode.val(res.order_code);
          this.orderDate.val(res.order_date);
          this.customerName.val(res.customer_name);
          this.orderType.val(res.order_type);
          this.orderStatus.val(res.order_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

// -----------------------------------------------------------------------------------------------------

  saveOrder(){
    let orderData = {
      account: sessionStorage.getItem('restaurant_id'),
      order_code: this.orderCode.val(),
      order_date: this.orderDate.val(),
      customer_name: this.customerName.val(),
      order_type: this.orderType.val(),
      order_status: this.orderStatus.val(),
      order_total: this.orderDetails.grid.getcolumnaggregateddata('total_price', ['sum'])['sum'],
    }

    this.ordersApi.putOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(orderData);
  }

  deleteOrder(){
    console.log("dude... u are gonna delete the order?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.ordersApi.deleteOrder()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/orders/all-orders');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
