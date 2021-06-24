import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-add-extra',
  templateUrl: './add-extra.component.html',
  styleUrls: ['./add-extra.component.css']
})
export class AddExtraComponent implements OnInit {

  constructor() { }

  @ViewChild("addExtraBillReference") addExtraBillWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("itemTypeReference") itemType: jqxDropDownListComponent;
  @ViewChild("itemReference") itemInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  itemTypeSource =  ['Appointment', 'Laboratory', 'Dispensary', 'Ward'];

  ngOnInit(): void {
  }

  // open add income popup dialog window
  openWindow(){
    this.addExtraBillWindow.open();
  }

  closeWindow(){
    this.addExtraBillWindow.close();
  }

  saveExtraBill(){
    let billData = {
      bill: sessionStorage.getItem('bill_id'),
      type: this.itemType.val(),
      item: this.itemInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(billData);
    this.addCommit.emit(billData);

    this.closeWindow()
  }


}
