import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ReceivedFormComponent } from '../received-form/received-form.component'


@Component({
  selector: 'app-edit-received',
  templateUrl: './edit-received.component.html',
  styleUrls: ['./edit-received.component.css']
})
export class EditReceivedComponent implements OnInit {

  constructor() { }

  @ViewChild('editReceivedReference') editReceived: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("receivedFormComponentReference") receivedForm: ReceivedFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  receivedId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editReceived.open();

    console.log(event.args.row.bounddata);
    this.receivedId = event.args.row.bounddata.id;

    this.receivedForm.referenceNumber.val(event.args.row.bounddata.reference_number);
    this.receivedForm.subject.val(event.args.row.bounddata.subject);
    this.receivedForm.sender.val(event.args.row.bounddata.sender);
    this.receivedForm.dateReceived.val(event.args.row.bounddata.date_received);
    this.receivedForm.letterDate.val(event.args.row.bounddata.letter_date);
  }

  saveReceived(){
    var receivedData = {
      id: this.receivedId,
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: this.receivedForm.referenceNumber.val(),
      subject: this.receivedForm.subject.val(),
      sender: this.receivedForm.sender.val(),
      date_received: this.receivedForm.dateReceived.val(),
      letter_date: this.receivedForm.letterDate.val(),
    }

    console.log(receivedData);

    this.editCommit.emit(receivedData);
  }

  deleteReceived(){
    this.deleteCommit.emit(this.receivedId);
  }

}
