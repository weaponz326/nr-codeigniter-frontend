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

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
  ) { }

  @ViewChild("addPaymentReference") addPayment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('paymentCodeReference') paymentCode: jqxInputComponent;
  @ViewChild('paymentDateReference')paymentDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;

  @ViewChild("selectBillComponentReference") selectBill: SelectBillComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  // stores db table ids of selected patient and admission
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

  billSelected(bill: any){
    console.log(bill);

    this.billIdStore = bill.id;
    this.billCode.val(bill.bill_code);
    this.patientName.val(bill.patient_name);
    this.patientCode.val(bill.clinical_number);
  }

  savePayment(){
    this.loadingSpinner.httpLoader.open();

    let paymentData = {
      account: sessionStorage.getItem('hospital_id'),
      payment_code: this.paymentCode.val(),
      payment_date: this.paymentDate.val(),
      bill: this.billIdStore
    }

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

    console.log(paymentData);
  }

}
