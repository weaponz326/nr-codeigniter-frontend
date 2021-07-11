import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {

  constructor() { }

  @ViewChild("editPersonnelReference") editPersonnelWindow: jqxWindowComponent;
  @ViewChild("staffCodeReference") staffCodeInput: jqxInputComponent;
  @ViewChild("staffNameReference") staffNameInput: jqxInputComponent;
  @ViewChild("batchNameReference") batchNameInput: jqxInputComponent;
  @ViewChild("batchSymbolReference") batchSymbolInput: jqxInputComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  personnelId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editPersonnelWindow.open();

    console.log(event.args.row.bounddata);
    this.personnelId = event.args.row.bounddata.id;

    this.staffNameInput.val(event.args.row.bounddata.staff_name);
    this.staffCodeInput.val(event.args.row.bounddata.staff_code);
    this.batchNameInput.val(event.args.row.bounddata.batch_name);
    this.batchSymbolInput.val(event.args.row.bounddata.batch_symbol);
  }

  closeWindow(){
    this.editPersonnelWindow.close();
  }

  savePersonnel(){
    let personnelData = {
      id: this.personnelId,
      roster: sessionStorage.getItem('roster_id'),
      staff_name: this.staffNameInput.val(),
      staff_code: this.staffCodeInput.val(),
      batch_name: this.batchNameInput.val(),
      batch_symbol: this.batchSymbolInput.val(),
    }

    console.log(personnelData);
    this.editCommit.emit(personnelData);

    this.closeWindow();
  }

}
