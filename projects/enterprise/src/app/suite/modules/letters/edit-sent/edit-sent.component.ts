import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SentFormComponent } from '../sent-form/sent-form.component'


@Component({
  selector: 'app-edit-sent',
  templateUrl: './edit-sent.component.html',
  styleUrls: ['./edit-sent.component.css']
})
export class EditSentComponent implements OnInit {

  constructor() { }

  @ViewChild('editSentReference') editSent: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("sentFormComponentReference") sentForm: SentFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  sentId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editSent.open();

    console.log(event.args.row.bounddata);
    this.sentId = event.args.row.bounddata.id;

    this.sentForm.referenceNumber.val(event.args.row.bounddata.reference_number);
    this.sentForm.subject.val(event.args.row.bounddata.subject);
    this.sentForm.recipient.val(event.args.row.bounddata.recipient);
    this.sentForm.dateSent.val(event.args.row.bounddata.date_sent);
    this.sentForm.letterDate.val(event.args.row.bounddata.letter_date);
  }

  saveSent(){
    var sentData = {
      id: this.sentId,
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: this.sentForm.referenceNumber.val(),
      subject: this.sentForm.subject.val(),
      recipient: this.sentForm.recipient.val(),
      date_sent: this.sentForm.dateSent.val(),
      letter_date: this.sentForm.letterDate.val(),
    }

    console.log(sentData);

    this.editCommit.emit(sentData);
  }

  deleteSent(){
    this.deleteCommit.emit(this.sentId);
  }

}
