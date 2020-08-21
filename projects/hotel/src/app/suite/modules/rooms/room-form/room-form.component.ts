import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  @ViewChild('roomNumberReference') roomNumber: jqxInputComponent;
  @ViewChild('roomTypeReference') roomType: jqxDropDownListComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('rateReference') rate: jqxNumberInputComponent;
  @ViewChild('featuresReference') features: jqxTextAreaComponent;
  @ViewChild('statusReference') roomStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
