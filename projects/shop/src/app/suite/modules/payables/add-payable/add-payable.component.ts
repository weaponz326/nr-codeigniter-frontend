import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PayableFormComponent } from '../payable-form/payable-form.component'


@Component({
  selector: 'app-add-payable',
  templateUrl: './add-payable.component.html',
  styleUrls: ['./add-payable.component.css']
})
export class AddPayableComponent implements OnInit {

  constructor() { }

  @ViewChild("addPayableReference") addPayable: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("payableFormComponentReference") payableForm: PayableFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addPayable.open();
  }

  closeWindow(){
    this.addPayable.close();
  }

  savePayable(){
    var payableData = {
      account: sessionStorage.getItem('shop_id'),
      payable_code: this.payableForm.payableCode.val(),
      payable_date: this.payableForm.payableDate.val(),
      due_date: this.payableForm.dueDate.val(),
      invoice_number: this.payableForm.invoiceNumber.val(),
      customer_name: this.payableForm.customerName.val(),
      amount: this.payableForm.amount.val(),
      date_paid: this.payableForm.datePaid.val(),
    }

    console.log(payableData);

    this.addCommit.emit(payableData);
    this.closeWindow();
  }


}
