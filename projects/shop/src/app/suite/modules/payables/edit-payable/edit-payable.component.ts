import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PayableFormComponent } from '../payable-form/payable-form.component'


@Component({
  selector: 'app-edit-payable',
  templateUrl: './edit-payable.component.html',
  styleUrls: ['./edit-payable.component.css']
})
export class EditPayableComponent implements OnInit {

  constructor() { }

  @ViewChild("editPayableReference") editPayable: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("payableFormComponentReference") payableForm: PayableFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  payableId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editPayable.open();

    console.log(event.args.row.bounddata);
    this.payableId = event.args.row.bounddata.id;

    this.payableForm.payableCode.val(event.args.row.bounddata.payable_code);
    this.payableForm.payableDate.val(event.args.row.bounddata.payable_date);
    this.payableForm.dueDate.val(event.args.row.bounddata.due_date);
    this.payableForm.invoiceNumber.val(event.args.row.bounddata.invoice_number);
    this.payableForm.customerName.val(event.args.row.bounddata.customer_name);
    this.payableForm.amount.val(event.args.row.bounddata.amount);
    this.payableForm.datePaid.val(event.args.row.bounddata.date_paid);
  }

  closeWindow(){
    this.editPayable.close();
  }

  savePayable(){
    var payableData = {
      id: this.payableId,
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

    this.editCommit.emit(payableData);
    this.closeWindow();
  }

  deletePayable(){
    this.deleteCommit.emit(this.payableId);
    this.closeWindow();
  }

}
