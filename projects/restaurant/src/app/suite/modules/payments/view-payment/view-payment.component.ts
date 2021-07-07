import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
  ) { }

  @ViewChild('paymentCodeReference') paymentCode: jqxInputComponent;
  @ViewChild('paymentDateReference') paymentDate: jqxDateTimeInputComponent;
  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('totalAmountReference') totalAmount: jqxNumberInputComponent;
  @ViewChild('amountPaidReference') amountPaid: jqxNumberInputComponent;
  @ViewChild('balanceReference') balance: jqxNumberInputComponent;

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

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
          this.paymentCode.val(res.payment_code);
          this.paymentDate.val(res.payment_date);
          this.orderCode.val(res.order.order_code);
          this.totalAmount.val(res.order.order_total);
          this.amountPaid.val(res.amount_paid);
          
          if (this.totalAmount.val() < this.amountPaid.val()) {
            this.balance.val(this.totalAmount.val() - this.amountPaid.val());
          }
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

// -------------------------------------------------------------------------------------------------------

    savePayment(){
    let paymentData = {
      account: sessionStorage.getItem('restaurant_id'),
      payment_code: this.paymentCode.val(),
      payment_date: this.paymentDate.val(),
      amount_paid: this.amountPaid.val(),
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
    console.log("dude... u are gonna delete the bill?");

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

            this.router.navigateByUrl('/suite/payments/all-payments');
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
