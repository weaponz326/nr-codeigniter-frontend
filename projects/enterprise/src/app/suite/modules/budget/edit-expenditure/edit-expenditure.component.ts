import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-edit-expenditure',
  templateUrl: './edit-expenditure.component.html',
  styleUrls: ['./edit-expenditure.component.css']
})
export class EditExpenditureComponent implements OnInit {

  constructor() { }

  @ViewChild("editExpenditureReference") editExpenditureWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  expenditureData: any;
  expenditureId: number;

  // open add account popup dialog window
  openWindow(event: any){
    this.editExpenditureWindow.open();

    console.log(event.args.row.bounddata);
    this.expenditureId = event.args.row.bounddata.id;

    this.descriptionInput.val(event.args.row.bounddata.item);
    this.amountInput.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editExpenditureWindow.close();
  }

  saveExpenditure(){
    this.expenditureData = {
      id: this.expenditureId,
      budget: sessionStorage.getItem('budget_id'),
      item: this.descriptionInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(this.expenditureData);
    this.editCommit.emit(this.expenditureData);
    this.closeWindow();
  }

  deleteExpenditure(){
    this.deleteCommit.emit(this.expenditureId);
    this.closeWindow();
  }

}
