import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReceivedFormComponent } from '../received-form/received-form.component'


@Component({
  selector: 'app-add-received',
  templateUrl: './add-received.component.html',
  styleUrls: ['./add-received.component.css']
})
export class AddReceivedComponent implements OnInit {

  constructor() { }

  @ViewChild('addReceivedReference') addReceived: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("receivedFormComponentReference") receivedForm: ReceivedFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addReceived.open();
  }

  closeWindow(){
    this.addReceived.close();
  }

  saveReceived(){
    var receivedData = {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: this.receivedForm.referenceNumber.val(),
      sender: this.receivedForm.sender.val(),
      subject: this.receivedForm.subject.val(),
      date_received: this.receivedForm.dateReceived.val(),
      letter_date: this.receivedForm.letterDate.val(),
    }

    console.log(receivedData);
    this.addCommit.emit(receivedData);
    this.closeWindow();
  }

}
