import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild('emailReference') emailInput: jqxInputComponent;
  @ViewChild('phoneReference') phoneInput: jqxInputComponent;
  @ViewChild('addressReference') addressTextArea: jqxTextAreaComponent;
  @ViewChild('saveContactButtonReference') saveContactButton: jqxButtonComponent;

  @Output() contactEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitContact(){
    let data = {
      email: this.emailInput.val(),
      phone: this.phoneInput.val(),
      address: this.addressTextArea.val()
    }

  	this.contactEvent.emit(data);
  }

}
