import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component'


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  constructor() { }

  @ViewChild("editTransactionReference") editTransactionWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild("transactionFormComponentReference") transactionForm: TransactionFormComponent

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  transactionData: any;
  transactionId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editTransactionWindow.open();

    console.log(event.args.row.bounddata);
    this.transactionId = event.args.row.bounddata.id;

    this.transactionForm.transactionDateInput.val(event.args.row.bounddata.transaction_date);
    this.transactionForm.descriptionInput.val(event.args.row.bounddata.description);
    this.transactionForm.transactionTypeDropDownList.val(event.args.row.bounddata.transaction_type);
    this.transactionForm.amountInput.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editTransactionWindow.close();
  }

  saveTransaction(){
    this.transactionData = {
      id: this.transactionId,
      account: sessionStorage.getItem('account_id'),
      transaction_date: this.transactionForm.transactionDateInput.val(),
      transaction_type: this.transactionForm.transactionTypeDropDownList.val(),
      description: this.transactionForm.descriptionInput.val(),
      amount: this.transactionForm.amountInput.val(),
    }

    console.log(this.transactionData);
    this.editCommit.emit(this.transactionData);

    this.closeWindow();
  }

  deleteTransaction(){
    this.deleteCommit.emit(this.transactionId);
  }

}
