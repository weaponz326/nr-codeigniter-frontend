import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.css']
})
export class AddExpenditureComponent implements OnInit {

  @ViewChild("addExpenditureReference") addExpenditureWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  expenditureData: any;

  // open add expenditure popup dialog window
  openWindow(){
    this.addExpenditureWindow.open();
  }

  saveExpenditure(){
    this.expenditureData = {
      budget: sessionStorage.getItem('budget_id'),
      item: this.descriptionInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(this.expenditureData);

    this.addCommit.emit(this.expenditureData);
  }

}
