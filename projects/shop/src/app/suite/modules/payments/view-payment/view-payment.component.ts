import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { PaymentFormComponent } from '../payment-form/payment-form.component';


@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('paymentFormComponentReference') paymentForm: PaymentFormComponent;

  navHeading: any[] = [
    { text: "All Payments", url: "/suite/payments/all-payments" },
    { text: "View Payment", url: "/suite/payments/view-payment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paymentsApi.getSinglePayment()
      .subscribe(
        res => {
          console.log(res);
          this.paymentForm.paymentCode.val(res.payment_code);
          this.paymentForm.paymentDate.val(res.payment_date);
          this.paymentForm.customerName.val(res.customer_name);
          this.paymentForm.amountPaid.val(res.amount_paid);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  savePayment(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a payment");

    var paymentData = {
      shop_id: sessionStorage.getItem('shop_id'),
      payment_code: this.paymentForm.paymentCode.val(),
      payment_date: this.paymentForm.paymentDate.val(),
      customer_name: this.paymentForm.customerName.val(),
      amount_paid: this.paymentForm.amountPaid.val(),
    }

    this.paymentsApi.putPayment(paymentData)
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

    console.log(paymentData);
  }

  deletePayment(){
    console.log("dude... u are gonna delete the payment?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.paymentsApi.deletePayment()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/payment/all-payment');
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
