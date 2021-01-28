import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-edit-general',
  templateUrl: './edit-general.component.html',
  styleUrls: ['./edit-general.component.css']
})
export class EditGeneralComponent implements OnInit {

  @ViewChild("editGeneralBillReference") editGeneralBillWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("itemReference") itemInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  generalItemId: number;

  // open add account popup dialog window
  openWindow(event: any){
    this.editGeneralBillWindow.open();

    console.log(event.args.row.bounddata);
    this.generalItemId = event.args.row.bounddata.id;

    this.itemInput.val(event.args.row.bounddata.item);
    this.amountInput.val(event.args.row.bounddata.amount);
  }

  saveGeneralBill(){
    let billData = {
      id: this.generalItemId,
      budget: sessionStorage.getItem('bill_id'),
      item: this.itemInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(billData);

    this.editCommit.emit(billData);
  }

  deleteGeneralBill(){
    this.deleteCommit.emit(this.generalItemId);
  }

}
