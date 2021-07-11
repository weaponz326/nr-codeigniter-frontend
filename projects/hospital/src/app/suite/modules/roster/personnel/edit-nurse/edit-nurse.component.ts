import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-edit-nurse',
  templateUrl: './edit-nurse.component.html',
  styleUrls: ['./edit-nurse.component.css']
})
export class EditNurseComponent implements OnInit {

  @ViewChild("editPersonnelReference") editPersonnelWindow: jqxWindowComponent;
  @ViewChild("nurseCodeReference") nurseCodeInput: jqxInputComponent;
  @ViewChild("nurseNameReference") nurseNameInput: jqxInputComponent;
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

    this.nurseNameInput.val(event.args.row.bounddata.nurse_name);
    this.nurseCodeInput.val(event.args.row.bounddata.nurse_code);
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
      nurse_name: this.nurseNameInput.val(),
      nurse_code: this.nurseCodeInput.val(),
      batch_name: this.batchNameInput.val(),
      batch_symbol: this.batchSymbolInput.val(),
    }

    console.log(personnelData);
    this.editCommit.emit(personnelData);

    this.closeWindow();
  }

}
