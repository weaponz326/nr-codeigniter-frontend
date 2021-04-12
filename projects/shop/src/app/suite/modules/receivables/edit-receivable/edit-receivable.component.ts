import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReceivableFormComponent } from '../receivable-form/receivable-form.component'


@Component({
  selector: 'app-edit-receivable',
  templateUrl: './edit-receivable.component.html',
  styleUrls: ['./edit-receivable.component.css']
})
export class EditReceivableComponent implements OnInit {

  constructor() { }

  @ViewChild("editReceivableReference") editReceivable: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("receivableFormComponentReference") receivableForm: ReceivableFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  receivableId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editReceivable.open();

    console.log(event.args.row.bounddata);
    this.receivableId = event.args.row.bounddata.id;

    this.receivableForm.receivableCode.val(event.args.row.bounddata.receivable_code);
    this.receivableForm.receivableDate.val(event.args.row.bounddata.receivable_date);
    this.receivableForm.dueDate.val(event.args.row.bounddata.due_date);
    this.receivableForm.invoiceNumber.val(event.args.row.bounddata.invoice_number);
    this.receivableForm.customerName.val(event.args.row.bounddata.customer_name);
    this.receivableForm.amount.val(event.args.row.bounddata.amount);
    this.receivableForm.dateReceived.val(event.args.row.bounddata.date_received);
  }

  saveReceivable(){
    var receivableData = {
      id: this.receivableId,
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

    this.editCommit.emit(receivableData);
  }

  deleteReceivable(){
    this.deleteCommit.emit(this.receivableId);
  }

}
