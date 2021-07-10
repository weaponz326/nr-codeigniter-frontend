import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor() { }

  @ViewChild("addPaymentReference") addPaymentWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("paymentDateReference") paymentDate: jqxDateTimeInputComponent;
  @ViewChild("memberNameReference") memberName: jqxInputComponent;
  @ViewChild("memberCodeReference") memberCode: jqxInputComponent;
  @ViewChild("amountReference") amount: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  paymentData: any;
  memberIdStore;

  // open add account popup dialog window
  openWindow(){
    this.addPaymentWindow.open();
  }

  closeWindow(){
    this.addPaymentWindow.close();
  }

  savePayment(){
    this.paymentData = {
      member_id: this.memberIdStore,
      dues: sessionStorage.getItem('dues_id'),
      payment_date: this.paymentDate.val(),
      member_name: this.memberName.val(),
      member_code: this.memberCode.val(),
      amount: this.amount.val(),
    }

    console.log(this.paymentData);
    this.addCommit.emit(this.paymentData);
    this.closeWindow();
  }

}
