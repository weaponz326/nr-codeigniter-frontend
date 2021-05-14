import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SentFormComponent } from '../sent-form/sent-form.component'


@Component({
  selector: 'app-add-sent',
  templateUrl: './add-sent.component.html',
  styleUrls: ['./add-sent.component.css']
})
export class AddSentComponent implements OnInit {

  constructor() { }

  @ViewChild('addSentReference') addSent: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("sentFormComponentReference") sentForm: SentFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addSent.open();
  }

  closeWindow(){
    this.addSent.close();
  }

  saveSent(){
    var sentData = {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: this.sentForm.referenceNumber.val(),
      recipient: this.sentForm.recipient.val(),
      subject: this.sentForm.subject.val(),
      date_sent: this.sentForm.dateSent.val(),
      letter_date: this.sentForm.letterDate.val(),
    }

    console.log(sentData);
    this.addCommit.emit(sentData);
    this.closeWindow();
  }

}
