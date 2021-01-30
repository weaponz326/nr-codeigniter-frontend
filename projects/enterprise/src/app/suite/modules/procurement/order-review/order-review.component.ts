import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  constructor() { }

  @ViewChild('issuedDateReference') issuedDate: jqxDateTimeInputComponent;
  @ViewChild('issuedByReference') issuedBy: jqxDropDownListComponent;
  @ViewChild('receivedDateReference') receivedDate: jqxDateTimeInputComponent;
  @ViewChild('receivedByReference') receivedBy: jqxDropDownListComponent;
  @ViewChild('approvedDateReference') approvedDate: jqxDateTimeInputComponent;
  @ViewChild('approvedByReference') approvedBy: jqxDropDownListComponent;
  @ViewChild('acknowledgementDateReference') acknowledgementDate: jqxDateTimeInputComponent;
  @ViewChild('acknowledgementByReference') acknowledgementBy: jqxDropDownListComponent;
  @ViewChild('completedDateReference') completedDate: jqxDateTimeInputComponent;
  @ViewChild('completedByReference') completedBy: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
