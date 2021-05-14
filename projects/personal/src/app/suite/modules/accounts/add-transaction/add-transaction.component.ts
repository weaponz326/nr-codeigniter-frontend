import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component'


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor() { }

  @ViewChild("addTransactionReference") addTransactionWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("transactionFormComponentReference") transactionForm: TransactionFormComponent

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  transactionData: any;

  // open add account popup dialog window
  openWindow(){
    this.addTransactionWindow.open();
  }

  closeWindow(){
    this.addTransactionWindow.close();
  }

  saveTransaction(){
    this.transactionData = {
      account: sessionStorage.getItem('account_id'),
      transaction_date: this.transactionForm.transactionDateInput.val(),
      transaction_type: this.transactionForm.transactionTypeDropDownList.val(),
      description: this.transactionForm.descriptionInput.val(),
      amount: this.transactionForm.amountInput.val(),
    }

    console.log(this.transactionData);
    this.addCommit.emit(this.transactionData);

    this.closeWindow();
  }

}
