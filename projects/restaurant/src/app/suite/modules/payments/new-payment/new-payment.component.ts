import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectBillComponent } from '../select-bill/select-bill.component'

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {

  constructor(private router: Router, private paymentsApi: PaymentsApiService) { }

  @ViewChild("addPaymentReference") addPayment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('paymentCodeReference') paymentCode: jqxInputComponent;
  @ViewChild('paymentDateReference')paymentDate: jqxDateTimeInputComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;

  @ViewChild("selectBillComponentReference") selectBill: SelectBillComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // stores db table ids of selected bill
  // to be retreived for sending to backend
  billIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPayment.open();
  }

  closeWindow(){
    this.addPayment.close();
  }

  orderSelected(bill: any){
    console.log(bill);

    this.billCode.val(bill.order_code);
    this.billIdStore = bill.id;
  }

  savePayment(){
    console.log('u are saving a new menu item');
    this.loadingSpinner.httpLoader.open();

    // amount source changed from bill to order
    var paymentData = {
      account: sessionStorage.getItem('restaurant_id'),
      order: this.billIdStore,
      payment_code: this.paymentCode.val(),
      payment_date: this.paymentDate.val(),
    }

    console.log(paymentData);

    this.paymentsApi.postPayment(paymentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('payment_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/payments/view-payment');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
