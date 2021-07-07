import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectStudentComponent } from '../select-student/select-student.component'
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
  @ViewChild('studentNameReference') studentName: jqxInputComponent;
  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('selectBillButtonReference') selectBillButton: jqxButtonComponent;

  @ViewChild("selectStudentComponentReference") selectStudent: SelectStudentComponent;
  @ViewChild("selectBillComponentReference") selectBill: SelectBillComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // stores db table ids of selected student and admission
  // to be retreived for sending to backend
  studentIdStore: any;
  billIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPayment.open();
  }

  closeWindow(){
    this.addPayment.close();
  }

  studentSelected(student: any){
    console.log(student);

    this.studentName.val(student.student_name);
    this.studentCode.val(student.student_code);
    this.studentIdStore = student.id;

    this.selectBill.getBillData(student.id);
    this.selectBillButton.disabled(false);
  }

  billSelected(bill: any){
    console.log(bill);

    this.billCode.val(bill.fees_code);
    this.billIdStore = bill.id;
  }

  savePayment(){
    this.loadingSpinner.httpLoader.open();

    let PaymentData = {
      account: sessionStorage.getItem('school_id'),
      payment_code: this.paymentCode.val(),
      payment_date: this.paymentDate.val(),
      bill: this.billIdStore,
    }

    this.paymentsApi.postPayment(PaymentData)
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

    console.log(PaymentData);
  }

}
