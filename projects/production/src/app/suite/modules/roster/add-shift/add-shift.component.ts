import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {

  constructor() { }

  @ViewChild("addShiftReference") addShiftWindow: jqxWindowComponent;
  @ViewChild("shiftNameReference") shiftNameInput: jqxInputComponent;
  @ViewChild("startTimeReference") startTimeInput: jqxDateTimeInputComponent;
  @ViewChild("endTimeReference") endTimeInput: jqxDateTimeInputComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  // open add shift popup dialog window
  openWindow(){
    this.addShiftWindow.open();
  }

  closeWindow(){
    this.addShiftWindow.close();
  }

  saveShift(){
    let shiftData = {
      roster: sessionStorage.getItem('roster_id'),
      shift_name: this.shiftNameInput.val(),
      start_time: this.startTimeInput.val(),
      end_time: this.endTimeInput.val(),
    }

    console.log(shiftData);
    this.addCommit.emit(shiftData);

    this.closeWindow();
  }

}
