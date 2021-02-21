import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})
export class AdditionalComponent implements OnInit {

  constructor() { }

  @ViewChild('dobReference') dobInput: jqxDateTimeInputComponent;
  @ViewChild('genderReference') genderDropDownList: jqxDropDownListComponent;
  @ViewChild('saveAdditionalButtonReference') saveAdditionalButton: jqxButtonComponent;

  @Output() additionalEvent = new EventEmitter<any>();

  genderSource: any[] = ['Male', 'Female'];

  ngOnInit(): void {
  }

  emitAdditional(){
    let data = {
      date_of_birth: this.dobInput.val(),
      gender: this.genderDropDownList.val()
    }

  	this.additionalEvent.emit(data);
  }

}
