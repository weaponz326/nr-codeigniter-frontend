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
  @ViewChild("personnelCodeReference") personnelCodeInput: jqxInputComponent;
  @ViewChild("personnelNameReference") personnelNameInput: jqxInputComponent;
  @ViewChild("shiftNameReference") shiftNameInput: jqxDropDownListComponent;
  @ViewChild("shiftSymbolReference") shiftSymbolInput: jqxDropDownListComponent;
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

    this.personnelNameInput.val(event.args.row.bounddata.personnel_name);
    this.personnelCodeInput.val(event.args.row.bounddata.personnel_code);
    this.shiftNameInput.val(event.args.row.bounddata.shift_name);
    this.shiftSymbolInput.val(event.args.row.bounddata.shift_symbol);
  }

  closeWindow(){
    this.editPersonnelWindow.close();
  }

  savePersonnel(){
    let personnelData = {
      id: this.personnelId,
      roster: sessionStorage.getItem('roster_id'),
      personnel_name: this.personnelNameInput.val(),
      personnel_code: this.personnelCodeInput.val(),
      shift_name: this.shiftNameInput.val(),
      shift_symbol: this.shiftSymbolInput.val(),
    }

    console.log(personnelData);
    this.editCommit.emit(personnelData);

    this.closeWindow();
  }

}
