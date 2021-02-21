import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('locationReference') locationInput: jqxInputComponent;
  @ViewChild('aboutReference') aboutTextArea: jqxTextAreaComponent;
  @ViewChild('saveBasicButtonReference') saveBasicButton: jqxButtonComponent;

  @Output() basicEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitBasic(){
    let data = {
      first_name: this.firstNameInput.val(),
      last_name: this.lastNameInput.val(),
      location: this.locationInput.val(),
      about: this.aboutTextArea.val()
    }

  	this.basicEvent.emit(data);
  }

}
