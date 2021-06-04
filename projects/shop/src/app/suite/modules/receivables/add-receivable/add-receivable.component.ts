import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReceivableFormComponent } from '../receivable-form/receivable-form.component'


@Component({
  selector: 'app-add-receivable',
  templateUrl: './add-receivable.component.html',
  styleUrls: ['./add-receivable.component.css']
})
export class AddReceivableComponent implements OnInit {

  constructor() { }

  @ViewChild("addReceivableReference") addReceivable: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("receivableFormComponentReference") receivableForm: ReceivableFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addReceivable.open();
  }

  closeWindow(){
    this.addReceivable.close();
  }

  saveReceivable(){
    var receivableData = {
      account: sessionStorage.getItem('shop_id'),
      receivable_code: this.receivableForm.receivableCode.val(),
      receivable_date: this.receivableForm.receivableDate.val(),
      due_date: this.receivableForm.dueDate.val(),
      invoice_number: this.receivableForm.invoiceNumber.val(),
      customer_name: this.receivableForm.customerName.val(),
      amount: this.receivableForm.amount.val(),
      date_received: this.receivableForm.dateReceived.val(),
    }

    console.log(receivableData);

    this.addCommit.emit(receivableData);
    this.closeWindow();
  }

}
