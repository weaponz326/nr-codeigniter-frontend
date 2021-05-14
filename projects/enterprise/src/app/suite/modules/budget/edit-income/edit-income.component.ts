import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent implements OnInit {

  constructor() { }

  @ViewChild("editIncomeReference") editIncomeWindow: jqxWindowComponent;
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

  incomeData: any;
  incomeId: number;

  // open add account popup dialog window
  openWindow(event: any){
    this.editIncomeWindow.open();

    console.log(event.args.row.bounddata);
    this.incomeId = event.args.row.bounddata.id;

    this.descriptionInput.val(event.args.row.bounddata.item);
    this.amountInput.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editIncomeWindow.close();
  }

  saveIncome(){
    this.incomeData = {
      id: this.incomeId,
      budget: sessionStorage.getItem('budget_id'),
      item: this.descriptionInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(this.incomeData);
    this.editCommit.emit(this.incomeData);
    this.closeWindow();
  }

  deleteIncome(){
    this.deleteCommit.emit(this.incomeId);
    this.closeWindow();
  }

}
