import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-add-general',
  templateUrl: './add-general.component.html',
  styleUrls: ['./add-general.component.css']
})
export class AddGeneralComponent implements OnInit {

  constructor() { }

  @ViewChild("addGeneralBillReference") addGeneralBillWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("itemReference") itemInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // open add income popup dialog window
  openWindow(){
    this.addGeneralBillWindow.open();
  }

  saveGeneralBill(){
    let billData = {
      budget: sessionStorage.getItem('bill_id'),
      item: this.itemInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(billData);

    this.addCommit.emit(billData);
  }

}
