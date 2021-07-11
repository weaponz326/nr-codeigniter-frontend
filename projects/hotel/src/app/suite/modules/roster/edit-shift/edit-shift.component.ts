import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css']
})
export class EditShiftComponent implements OnInit {

  constructor() { }

  @ViewChild("editShiftReference") editShiftWindow: jqxWindowComponent;
  @ViewChild("shiftNameReference") shiftNameInput: jqxInputComponent;
  @ViewChild("startTimeReference") startTimeInput: jqxDateTimeInputComponent;
  @ViewChild("endTimeReference") endTimeInput: jqxDateTimeInputComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  shiftId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editShiftWindow.open();

    console.log(event.args.row.bounddata);
    this.shiftId = event.args.row.bounddata.id;

    this.shiftNameInput.val(event.args.row.bounddata.shift_name);
    this.startTimeInput.val(event.args.row.bounddata.start_time);
    this.endTimeInput.val(event.args.row.bounddata.end_time);
  }

  closeWindow(){
    this.editShiftWindow.close();
  }

  saveShift(){
    let shiftData = {
      id: this.shiftId,
      roster: sessionStorage.getItem('roster_id'),
      shift_name: this.shiftNameInput.val(),
      start_time: this.startTimeInput.val(),
      end_time: this.endTimeInput.val(),
    }

    console.log(shiftData);
    this.editCommit.emit(shiftData);

    this.closeWindow();
  }

  deleteShift(){
    this.deleteCommit.emit(this.shiftId);
  }

}
