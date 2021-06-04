import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { PaymentFormComponent } from '../payment-form/payment-form.component';


@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('paymentFormComponentReference') paymentForm: PaymentFormComponent;

  navHeading: any[] = [
    { text: "New Payment", url: "/suite/payments/new-payment" },
  ];

  guestId: any;
  billId: any;

  ngOnInit(): void {
  }

  savePayment(){
    console.log('u are saving a new payment');
    this.loadingSpinner.httpLoader.open();

    var paymentData = {
      account: sessionStorage.getItem('hotel_id'),
      payment_code: this.paymentForm.paymentCode.val(),
      payment_date: this.paymentForm.paymentCode.val(),
      guest_id: this.guestId,
      bill_id: this.billId,
      amount_paid: this.paymentForm.amountPaid.val(),
    }

    console.log(paymentData);

    this.paymentsApi.postPayment(paymentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('payment_id', res.data.id);
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
